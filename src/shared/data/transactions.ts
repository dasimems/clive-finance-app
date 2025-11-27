import {
  EPaymentType,
  ETransactionType,
  TTransactionCardProp,
} from "../components/transaction/transaction-card/transaction-card.component";

const TRANSACTION_TYPES: readonly ETransactionType[] = [
  ETransactionType.DEBIT,
  ETransactionType.CREDIT,
];

const CREDIT_PAYMENT_TYPES: readonly EPaymentType[] = [EPaymentType.TRANSFER];

const DEBIT_PAYMENT_TYPES: readonly EPaymentType[] = [
  EPaymentType.TRANSFER,
  EPaymentType.MTN_PURCHASE,
  EPaymentType.AIRTEL_PURCHASE,
  EPaymentType.GLO_PURCHASE,
  EPaymentType.ETISALAT_PURCHASE,
  EPaymentType.STAMP_DUE,
];

const TITLE_TEMPLATES: readonly string[] = [
  "Utility Bill Payment",
  "Payroll Credit",
  "POS Purchase",
  "Savings Contribution",
  "Loan Repayment",
  "Subscription Renewal",
  "Invoice Settlement",
  "Tax Remittance",
  "Insurance Premium",
  "Merchant Refund",
  "Fuel Station Purchase",
  "Mobile Airtime Purchase",
  "Travel Booking",
  "Grocery Run",
  "Tuition Payment",
  "Medical Expense",
];

const TITLE_CONTEXTS: readonly string[] = [
  "Downtown Branch",
  "Mobile Banking",
  "Corporate Desk",
  "Self Service",
  "Automated Scheduler",
  "Retail Partner",
  "Utility Provider",
  "Payroll Desk",
  "Savings Goal",
  "Airtime Vendor",
  "Government Office",
  "Insurance Broker",
];

const BASE_TIMESTAMP = Date.UTC(2022, 0, 1, 8, 0, 0);
const INTERVAL_MS = 1000 * 60 * 90;

const toCurrency = (value: number) =>
  Math.round((value + Number.EPSILON) * 100) / 100;

const getTransactions = (count: number): TTransactionCardProp[] => {
  return Array.from({ length: count }, (_, index) => {
    const type = TRANSACTION_TYPES[index % TRANSACTION_TYPES.length];
    const paymentOptions =
      type === ETransactionType.CREDIT
        ? CREDIT_PAYMENT_TYPES
        : DEBIT_PAYMENT_TYPES;
    const paymentType =
      paymentOptions[
        (index + Math.floor(index / paymentOptions.length)) %
          paymentOptions.length
      ];

    const titleTemplate = TITLE_TEMPLATES[index % TITLE_TEMPLATES.length];
    const context =
      TITLE_CONTEXTS[
        (index + Math.floor(index / TITLE_CONTEXTS.length)) %
          TITLE_CONTEXTS.length
      ];
    const title = `${titleTemplate} - ${context} #${index + 1}`;

    const baseAmount = 45 + ((index * 37) % 9500) + (index % 13) * 4.25;
    const amount =
      type === ETransactionType.CREDIT
        ? toCurrency(baseAmount + 180)
        : toCurrency(baseAmount + 35);

    const date = new Date(BASE_TIMESTAMP + index * INTERVAL_MS);

    return {
      type,
      paymentType,
      title,
      amount,
      date,
    };
  });
};

export default getTransactions;
