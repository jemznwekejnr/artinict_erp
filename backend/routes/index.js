import { Router } from "express";
import AuthApi from "./AuthApi.js";
import CircularApi from "./CircularApi.js";
import UserApi from "./UserApi.js";
import StaffApi from "./StaffApi.js";
import MemoApi from "./MemoApi.js";
import VoucherApi from "./VoucherApi.js";
import PayslipApi from "./PayslipApi.js";
const router = Router();

//const auth = passport.authenticate("jwt", { session: false });

//router.use("/transaction", auth, TransactionsApi);
router.use("/staff", StaffApi);
router.use("/auth", AuthApi);
router.use("/circular", CircularApi);
router.use("/user", UserApi);
router.use("/memo", MemoApi);
router.use("/voucher", VoucherApi);
router.use("/payslip", PayslipApi);

export default router;
