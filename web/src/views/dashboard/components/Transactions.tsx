import TransactionItem from '@components/TransactionItem';
import { Stack } from '@mui/material';

import { useAtom } from 'jotai';
import React from 'react';

import { transactionsAtom } from '../../../data/transactions';

const Transactions: React.FC = () => {
  const [transactions] = useAtom(transactionsAtom);

  return (
    <Stack spacing={2}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Stack>
  );
};

export default Transactions;