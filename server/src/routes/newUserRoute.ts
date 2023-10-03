import express, {Request, Response, Router} from 'express'
import { User } from '../models/user'
import bodyParser from 'body-parser';
import { dbConnect } from '../lib/mongoose';

const router: Router = express.Router();

const app = express()

app.use(bodyParser.json());

interface IUser {
  name: string;
  email: string;
}

dbConnect()

router.post('/newUser', async (req: Request, res: Response) => {
  try{
    const { name, email }: IUser = req.body
    const newUser = new User({ name, email })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error){
    console.error('Error creating user:', error);
    console.log(req.body)
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router