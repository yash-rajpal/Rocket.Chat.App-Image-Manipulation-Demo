import {
    IAppAccessors,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import { IMessage, IPostMessageSent } from "@rocket.chat/apps-engine/definition/messages";
import { IAppInfo } from "@rocket.chat/apps-engine/definition/metadata";
import { IFileUploadContext, IPreFileUpload } from "@rocket.chat/apps-engine/definition/uploads";
import { PostMessageSentHandler } from "./handlers/PostMessageHandler";
import { PreFileUpload } from "./handlers/PreFileUpload";

export class BadWordsFilterApp extends App implements IPostMessageSent,IPreFileUpload {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
    
    public async executePostMessageSent(
        message: IMessage,
        read: IRead,
        http: IHttp,
        persis: IPersistence,
        modify: IModify,
    ): Promise<void> {
        const handler = new PostMessageSentHandler(
            this,
            message,
            read,
            http,
            persis,
            modify
        );
        console.log("Message")
        await handler.run();
        
    }

    public async executePreFileUpload(
        context: IFileUploadContext,
        read: IRead,
        http: IHttp,
        persis: IPersistence,
        modify: IModify
    ):Promise<void> {
        const preUploadHandler = new PreFileUpload(
            this,
            context,
            read,
            http,
            persis,
            modify
        );
        await preUploadHandler.run();
    }
}
