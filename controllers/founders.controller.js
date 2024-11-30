import { Founder, validateFounder } from '../models/founders.model.js'

export async function getAllFounders(req, res) {
  try {
    const founders = await Founder.find()
    res.json(founders)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch founders. Please try again' })
  }
}

export async function getOneFounder(req, res) {
  try {
    const { id } = req.params
    const founderId = String(id)
    console.log(req.params)
    const founder = await Founder.findOne({ founderId })

    if (!founder) {
      return res.status(404).json({ error: 'Founder does not exist' })
    }
    res.json(founder)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch founder' })
  }
}

export async function addNewFounder(req, res) {
  const { error } = validateFounder(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const newFounder = new Founder({ name, company, description })
    await newFounder.save()
    res.status(201).json(newFounder)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create new founder' })
  }
}
