import { IHttp, IModify, IPersistence, IRead } from "@rocket.chat/apps-engine/definition/accessors";
import { IApp } from "@rocket.chat/apps-engine/definition/IApp";
import { IFileUploadContext } from "@rocket.chat/apps-engine/definition/uploads";

export class PreFileUpload{
    constructor(
        private readonly app: IApp,
        private readonly context: IFileUploadContext,
        private readonly read: IRead,
        private readonly http: IHttp,
        private readonly persis: IPersistence,
        private readonly modify: IModify
    ) {}
    public async run(){
        const fileBuffer = this.context.content; // getting file as Buffer
        this.app.getLogger().debug("the file content is", fileBuffer.toString('base64'))
    }
}