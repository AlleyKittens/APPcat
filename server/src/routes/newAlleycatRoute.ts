import express, {Request, Response, Router} from 'express'
import { User } from '../models/user'
import bodyParser from 'body-parser';
import { dbConnect } from '../lib/mongoose';
import { Alleycat } from '../models/alleycat';

const router: Router = express.Router();

const app = express()

app.use(bodyParser.json());

interface IUser {
  name: string
  email: string
  createdAlleycats: {}
}

interface IAlleycat {
  name: String
  creator_name: String
  starts_at: Date
  ends_at: Date
  rules: String
  picture: String
  ranking: {}
  checkpoints: {}
  subscribers: {}
}

dbConnect()

router.post('/newAlleycat', async (req: Request, res: Response) => {
  try{
    const { name, creator_name, starts_at, ends_at, rules, picture, checkpoints }: IAlleycat = req.body
    const newAlleycat = new Alleycat({ name, creator_name, starts_at, ends_at, rules, picture, checkpoints })
    await newAlleycat.save()
    await User.findOne({'name': `${creator_name}`}).then((foundUser) => {
      if (foundUser){
        foundUser.createdAlleycats.push(newAlleycat)
        foundUser.save()
      }
    })
    res.status(201).json(newAlleycat)
  } catch (error){
    console.error('Error creating user:', error);
    console.log(req.body)
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router