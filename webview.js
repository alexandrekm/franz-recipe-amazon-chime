module.exports = Franz => {
    function getMessages() {
        // input the room names you want the unread messages to be counted in the badge
	var roomsWithNotifications = ["YOUR_ROOM_NAMES"];
        const roomList = document.querySelectorAll(".RoomListItemContainer");

        var totalMessages = 0;
		Array.prototype.forEach.call(roomList, function(room) {
			var title = room.querySelector(".RoomListItemContainer__title").innerText.split('\n')[0];
			var unread = room.querySelector(".RoomListItemContainer__unreadBadge")
			if (unread) {
				if (roomsWithNotifications.includes(title)){
					totalMessages += parseInt(unread.innerText);
				}
			}
		});
		const unreadPersonalMessages = document.querySelectorAll(".ConversationListItemContainer__unreadBadge");
		Array.prototype.forEach.call(unreadPersonalMessages, function(unreadMessages) {
			var unreadMessage = parseInt(unreadMessages.innerText.split('\n')[0]);
			totalMessages += unreadMessage;
		});
		Franz.setBadge(totalMessages)		
    }
    Franz.loop(getMessages)
}

