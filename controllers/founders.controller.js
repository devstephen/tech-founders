import { Founder, validateFounder } from '../models/founders.model.js'

export async function getAllFounders(req, res) {
  try {
    const founders = await Founder.find()
    res.json(founders)
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch founders. Please try again',
      message: error.message,
    })
  }
}

export async function getOneFounder(req, res) {
  try {
    const { id } = req.params
    const founderId = String(id)
    console.log(req.params)
    const founder = await Founder.findById(founderId)

    if (!founder) {
      return res.status(404).json({ error: 'Founder does not exist' })
    }
    res.json(founder)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch founder', message: error.message })
  }
}

export async function addNewFounder(req, res) {
  const { error } = validateFounder(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const { name, company, description } = req.body
    const newFounder = new Founder({ name, company, description })
    const result = await newFounder.save()
    console.log(newFounder)

    res.status(201).json(result)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to create new founder', message: error.message })
  }
}
