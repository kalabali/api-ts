import { Router, Request, Response } from 'express';
import { param, validationResult, Result } from 'express-validator/check';

import { validateMonthRange, validateYearRange } from '../lib/customs-validation';

const router:Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("REST api version 1");
});

router.get('/calendar/:year/:month', [
    param('year')
    .isNumeric()
    .custom(validateYearRange),
    param('month')
    .isNumeric()
    .custom(validateMonthRange)
], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errs = errors.array({ onlyFirstError: true }).map((e: any) => {
            return {
                param: e.param,
                msg: e.msg
            }
        })
        return res.status(422).json({ errors: errs });
    }
    
    const { year, month } = req.params;

    res.status(200).json({
        year, month
    });
});

export default router;