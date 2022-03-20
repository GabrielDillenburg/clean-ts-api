import { AccountModel } from '../../../domain/model/account'
import { AuthenticationModel } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/load-account-by-email-repository'
import { DbAuthentication } from './db-authentication'

const makeFakeAccount = (): AccountModel => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email@test.com',
  password: 'any_password'
})

const makeFakeLoadAccountByEmailRepository = (): LoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements LoadAccountByEmailRepository {
    async load (email: string): Promise<AccountModel> {
      const account = makeFakeAccount()
      return new Promise(resolve => resolve(account))
    }
  }
  return new LoadAccountByEmailRepositoryStub()
}

const makeFakeAuthentication = (): AuthenticationModel => ({
  email: 'any_email@test.com',
  password: 'any_password'
})

interface SutTypes {
  sut: DbAuthentication
  loadAccountByEmailRepositoryStub: LoadAccountByEmailRepository

}

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositoryStub = makeFakeLoadAccountByEmailRepository()
  const sut = new DbAuthentication(loadAccountByEmailRepositoryStub)
  return {
    sut,
    loadAccountByEmailRepositoryStub
  }
}

describe('Db Authentication', () => {
  test('should call LoadAccountByEmailRepository with correct email', async () => {
    const { sut, loadAccountByEmailRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadAccountByEmailRepositoryStub, 'load')
    await sut.auth(makeFakeAuthentication())
    expect(loadSpy).toHaveBeenCalledWith('any_email@test.com')
  })
})
