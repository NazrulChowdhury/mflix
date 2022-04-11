import dbConnect from "../../../util/dbConnect"

const handler = async(req, res) => {
    try{ 
        await dbConnect()
        return res.status(200).send('db is successfully connected!') 

    } catch(error){
        return res.status(401).send({message : 'oops! something went wrong.'})
    }
    
}
export default handler