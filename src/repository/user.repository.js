import User from "../models/user.model.js"

class UserRepository {

    async create(username, email, password) {
        return await User.create({
            name: username,
            email: email,
            password: password
        })
    }

    async deleteById(user_id) {
        await User.findByIdAndDelete(user_id)
    }

    async getById(user_id) {
        return await User.findById(user_id)
    }

    async updateById(user_id, new_user_props) {
        const new_user = await User.findByIdAndUpdate(
            user_id,
            new_user_props,
            { new: true } //Esto hara que devuelva el objeto actualizado
        )
        return new_user
    }

    async getByEmail(email) {
        const user = await User.findOne({ email: email })
        return user
    }

    async getByUsername(username) {
        const user = await User.findOne({ name: username })
        return user
    }

    //llama a algun usuario de la DB
    async getUser() {
        const user = await User.findOne()
        return user
    }

    async deleteByEmail(email) {
        await User.findOneAndDelete({ email: email })
    }
}




const userRepository = new UserRepository()
export default userRepository