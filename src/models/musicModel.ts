import mongoose,{Schema, Document, Model} from "mongoose";



export interface MusicType extends Document{
    title : string,
    auth :string,
    musicfile : string,
} 

const MusicSchema :Schema <MusicType> = new Schema(
    {
        title:{
            type:String,
            lowercase : true,
            required:true,
            trim:true,
            index:true
        },
        auth :{
            type:String,
            required:true,
            lowercase : true,
            trim:true,
            index:true
        },
        musicfile:{
            type:String,
            required:[true,'Music file is requied !']
        }
    },{timestamps:true}
)

const MusicModel: Model<MusicType> = mongoose.models.Music as Model<MusicType> || mongoose.model<MusicType>('Music', MusicSchema);

 export default MusicModel