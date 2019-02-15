// import { Schema, Model, model, Document } from 'mongoose';
// import { IMonth } from '../interfaces/month.interface';

// export interface IMonthModel extends IMonth, Document {}

// const ObjectId = Schema.Types.ObjectId;

// const monthSchema: Schema = new Schema({    
//     month: {
//         index:   Number,
//         english: String,        
//         bahasa: String
//     },
//     year: {
//         masehi: Number,
//         caka: Number
//     },
//     timestamp: Date,
//     weeks: [
//         {
//             wuku: String,
//             ingkel: String,
//             bhatara: String,
//             dates: [{ type: ObjectId, ref: 'calendar_dates' }]
//         }
//     ]
// });

// const MonthCalendar: Model<IMonthModel> = model<IMonthModel>('calendar_months', monthSchema);

// export default MonthCalendar;