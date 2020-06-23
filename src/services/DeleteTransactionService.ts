import { getCustomRepository } from 'typeorm';

// import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionRepository';

import AppError from '../errors/AppError';

export default class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not found.');
    }

    await transactionsRepository.remove(transaction);
  }
}
