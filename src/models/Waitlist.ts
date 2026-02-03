import mongoose, { Schema, model, models } from 'mongoose';

export interface IWaitlist {
    email: string;
    createdAt: Date;
}

const WaitlistSchema = new Schema<IWaitlist>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Waitlist = models.Waitlist || model<IWaitlist>('Waitlist', WaitlistSchema);

export default Waitlist;
