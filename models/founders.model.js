import { Schema, model } from 'mongoose'
import Joi from 'joi'

const founderSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: crypto.randomUUID(),
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export const Founder = model('founder', founderSchema)

export const validateFounder = (founder) => {
  const schema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(5).max(50).required(),
    company: Joi.string().min(5).required(),
    description: Joi.string().min(10).required(),
  })

  return schema.validate(founder)
}
