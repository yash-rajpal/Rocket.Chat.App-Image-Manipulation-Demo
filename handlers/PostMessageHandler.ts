import { IHttp, IModify, IPersistence, IRead } from "@rocket.chat/apps-engine/definition/accessors";
import { IApp } from "@rocket.chat/apps-engine/definition/IApp";
import { IMessage } from "@rocket.chat/apps-engine/definition/messages";
// const fs = require('fs').promises;

export class PostMessageSentHandler{
    constructor(private readonly app: IApp,
        private readonly message: IMessage,
        private readonly read: IRead,
        private readonly http: IHttp,
        private readonly persis: IPersistence,
        private readonly modify: IModify) {}
        public async run() {
            console.log("Inside run")
            const { text, editedAt, room, sender, attachments } = this.message;
            const url = attachments ? attachments[0].audioUrl : ''
            // const contents = await fs.readFileSync('http://localhost:3000/'+url, {encoding: 'base64'}).then(res => console.log(res.text())).catch(e => console.log(e));
            this.app.getLogger().debug("The Message is recieved", text, room, sender, url)
            console.log("The Message is recieved", this.message, text, room, sender, attachments)

            console.log('*/ IREAD */')

            // const buffer = this.read.getUploadReader().getBuffer();
            // const bufferId = this.read.getUserReader().getById();

            // console.log("file uploaded", buffer, bufferId)
        
        }
}