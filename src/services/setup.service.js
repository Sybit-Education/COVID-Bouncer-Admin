import { configService } from '@/services/config.service'

class SetupService {
  async isSetupCompleted () {
    const masterPassword = await configService.fetchMasterPassword()
    if (masterPassword) {
      return true
    } else {
      return false
    }
  }
}

export const setupService = new SetupService()
