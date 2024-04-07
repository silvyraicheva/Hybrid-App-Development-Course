function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_HJEH01PJC";
    const kinveyAppSecret = "0e5f8c19076142e587b2dff452ef219d";
    const kinveyAppAuthHeaders = {
        Authorization: "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    sessionStorage.clear();
    showHideMenuLinks();
    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem("authToken")) {
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListBooks").show();
            $("#linkCreateBook").show();
            $("#linkLogout").show();
        } else {
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListBooks").hide();
            $("#linkCreateBook").hide();
            $("#linkLogout").hide();
        }
    }

    function showView(viewName) {
        $("main > section").hide();
        $("#" + viewName).show();
    }
    function showHomeView() {
        showView("viewHome");
    }

    function showLoginView() {
        showView("viewLogin");
        $("#formLogin").trigger("reset");
    }
    function showRegisterView() {
        showView("viewRegister");
        $("#formRegister").trigger("reset");
    }
    function loginUser() {
        let userData = {
            username: $("#formLogin input[name=username]").val(),
            password: $("#formLogin input[name=passwd]").val(),
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError,
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            // listBooks();
            showInfo("Login successful.");
        }
        function handleAjaxError(response) {
            alert("https request error");
        }
    }
    function registerUser() {
        let userData = {
            username: $("#formRegister input[name=username]").val(),
            password: $("#formRegister input[name=passwd]").val(),
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError,
        });
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            // listBooks();
            showInfo("User registration successful.");
        }
        function handleAjaxError(response) {
            alert("https request error");
        }
    }

    function showInfo(message) {
        $("#infoBox").text(message);
        $("#infoBox").show();
        setTimeout(function () {
            $("#infoBox").fadeOut();
        }, 3000);
    }
    function showError(errorMsg) {
        $("#errorBox").text("Error: " + errorMsg);
        $("#errorBox").show();
    }

    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);

    $("#linkListBooks").click(listBooks);
    $("#linkCreateBook").click(showCreateBookView);
    $("#linkLogout").click(logoutUser);
    function showCreateBookView() {
        $("#formCreateBook").trigger("reset");
        showView("viewCreateBook");
    }

    $("#buttonCreateBook").click(createBook);
    $("#buttonEditBook").click(editBook);

    function listBooks() {
        $("#books .table tbody").empty();
        showView("viewBooks");
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            success: function (data) {
                console.log("Books data received:", data);
                loadBooksSuccess(data);
            },
        });
    }

    function loadBooksSuccess(books) {
        $("#errorBox").hide();
        showInfo("Books loaded.");
        let booksTableBody = $("#books .table tbody");

        if (books.length === 0) {
            booksTableBody.append(
                $("<tr>").append(
                    $('<td colspan="4">').text("No books in the library.")
                )
            );
        } else {
            books.forEach((book) => appendBookRow(book, booksTableBody));
        }
    }

    function appendBookRow(book, booksTableBody) {
        let bookRow = $("<tr>").append(
            $("<td>").text(book.title),
            $("<td>").text(book.author),
            $("<td>").text(book.description),
            $("<td>").append(
                $("<button>")
                    .text("Edit")
                    .addClass("btn-edit btn btn-primary")
                    .attr("data-id", book._id),
                $("<button>")
                    .text("Delete")
                    .addClass("btn-delete btn btn-danger")
                    .attr("data-id", book._id)
            )
        );
        booksTableBody.append(bookRow);
    }
    function createBookSuccess(response) {
        listBooks();
        showInfo("Book created successfully.");
    }
    function editBook(bookId, bookData) {
        $.ajax({
            method: "PUT",
            url: `${kinveyBaseUrl}appdata/${kinveyAppKey}/books/${bookId}`,
            headers: getKinveyUserAuthHeaders(),
            data: JSON.stringify(bookData),
            contentType: "application/json",
            success: editBookSuccess,
            error: handleAjaxError,
        });
    }

    function editBookSuccess(response) {
        showInfo("Book updated successfully.");
        listBooks();
        showView("viewBooks");
    }
    function deleteBook(bookId) {
        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
            success: deleteBookSuccess,
            error: handleAjaxError,
        });
    }
    function deleteBookSuccess(response) {
        showInfo("Book deleted successfully.");
        listBooks();
        showView("viewBooks");
    }

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show();
        },
        ajaxStop: function () {
            $("#loadingBox").hide();
        },
    });

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem("authToken", userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem("userId", userId);
        let username = userInfo.username;
        $("#loggedInUser").text("Welcome, " + username + "!");
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }

        showError(errorMsg);
    }

    function logoutUser() {
        sessionStorage.clear();
        $("#loggedInUser").text("");
        showHideMenuLinks();
        showView("viewHome");
        showInfo("Logout successful.");
    }

    function getKinveyUserAuthHeaders() {
        return {
            Authorization: "Kinvey " + sessionStorage.getItem("authToken"),
        };
    }
}
