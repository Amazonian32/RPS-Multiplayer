$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyD0tvULnMv3osonUpErsyaMNH8D5KLsvSk",
        authDomain: "rps-homeworkapp.firebaseapp.com",
        databaseURL: "https://rps-homeworkapp.firebaseio.com",
        projectId: "rps-homeworkapp",
        storageBucket: "rps-homeworkapp.appspot.com",
        messagingSenderId: "252613477272",
        appId: "1:252613477272:web:edd5c1c55e2698fba521ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let database = firebase.database();

    $("#send").on("click", function (event) {
        let name = $("#name").val().trim();
        let message = $("#message").val().trim();
        console.log("SEND", name, message);

        database.ref("/conversation").push({
            name, message
        })
    });

    database.ref("/conversation").on("child_added",
        function (snapshot) {
            console.log(snapshot.val())
            $("#conversation").prepend(
                $("<p>").text(snapshot.val().name + ": " + snapshot.val().message)
            )
        },
        function (error) { }
    );

    $("#open").on("click", function(event){
        event.preventDefault();
        let chatRoom = $("#chatroom");
        if(chatRoom.attr("style") == "display: none;"){
            chatRoom.attr("style", "display: show;")
            $("#open").text("Close the chat")
        }else{
            chatRoom.attr("style", "display: none;")
            $("#open").text("Open the chat")
        }
    })

    var maxPlayers = 2;
    







    // function didYouWin(yourRPS, opponentRPS) {

    //     // Run traditional rock, paper, scissors logic and return whether you won, lost, or had a draw.
    //         switch(yourRPS) {
    //         case 'rock':
    //           switch(opponentRPS) {
    //                 case 'rock':
    //                     return 'draw';
    //                 case 'paper':
    //                     return 'lose';
    //                 case 'scissors':
    //                     return 'win';
    //             }
    //           break;
    //         case 'paper':
    //             switch(opponentRPS) {
    //                 case 'rock':
    //                     return 'win';
    //                 case 'paper':
    //                     return 'draw';
    //                 case 'scissors':
    //                     return 'lose';
    //             }
    //           break;
    //         case 'scissors':
    //             switch(opponentRPS) {
    //                 case 'rock':
    //                     return 'lose';
    //                 case 'paper':
    //                     return 'win';
    //                 case 'scissors':
    //                     return 'draw';
    //             }
    //             break;
    //         }
    //      }
})