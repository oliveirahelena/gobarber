import IMailProvider from '../models/IMailProvider';
import ISenndMailDTO from '../dtos/ISendEmailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISenndMailDTO[] = [];

  public async sendMail(message: ISenndMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
