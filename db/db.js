import mongoose from 'mongoose'

export default async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connection successful')
  } catch (error) {
    console.log(error)
  }
}
