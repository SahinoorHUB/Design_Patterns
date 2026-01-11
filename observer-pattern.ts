//Observer pattern
// Message board display/Update system
// Name Messagequeue

interface IDisplay{
    displayMessage(): void
}

interface IClient{
    update(message: string): void
}

interface IMessageQueueManager{
    addClient(client: IClient): void;
    removeClient(client: IClient): void;
    notifyClients(message: string): void;
}

//Build a MessageQueueManager Observer

class MessageQueueManager implements IMessageQueueManager{
    private clients: IClient[] = [];
    private messages: string[] = [];

    addClient(client: IClient): void {
        this.clients.push(client);
    }

    removeClient(client: IClient): void {
        this.clients = this.clients.filter(c => c !== client);
    }

    notifyClients(message: string): void {
        if (this.clients.length > 0) {
            this.clients.forEach(client => client.update(message));
        } else {
            console.log("No clients to notify");
        }
    }
}

// Build a client class

class NoticeBoard implements IDisplay, IClient{
    private message: string = "";

    displayMessage(): void {
        console.log(`Notice Board: ${this.message}`);
    }

    update(message: string): void {
        this.message = message;
        this.displayMessage();
    }
}

// Build Notification System

class NotificationPanel implements IDisplay, IClient{
    private message: string = "";

    displayMessage(): void {
        console.log(`Notification Panel: ${this.message}`);
    }

    update(message: string): void {
        this.message = message;
        this.displayMessage();
    }
}

// Use observer pattern

const messageQueueManager = new MessageQueueManager();

const noticeBoardAdmin = new NoticeBoard();
const noticeBoardUser = new NoticeBoard();
const notificationPanel = new NotificationPanel();

// Add clients to the message queue manager
messageQueueManager.addClient(noticeBoardAdmin);
messageQueueManager.addClient(noticeBoardUser);
messageQueueManager.addClient(notificationPanel);

// Add messages to the message queue manager
messageQueueManager.notifyClients("New message: Hello, admin!");
messageQueueManager.notifyClients("New message: Hello, user!");
messageQueueManager.notifyClients("Hi all please check the new message!");

