import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const registerUser = async (req, res) => { 
    const { nama, email, password } = req.body;

    if (!nama || !email || !password) {
        return res.status(400).json({ message: 'Lengkapi semua data.' });
    }

    try { 
        // Cek apakah email sudah terdaftar
        const existing = await User.findOne({ where: { email } });
        if (existing) { 
            return res.status(409).json({ message: 'Email sudah terdaftar' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru
        const user = await User.create({ nama, email, password: hashedPassword });

        // Hapus password dari response
        const { password: _, ...userData } = user.toJSON();
        return res.status(201).json(userData);
    } catch (err) { 
        console.error(err);
        return res.status(500).json({ message: 'Gagal register user' });
    }
};
