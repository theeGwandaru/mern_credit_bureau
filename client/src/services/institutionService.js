
import axios from 'axios';
import { baseUrl } from '../constants';

export default class InstitutionService {

    createInstitution(institutionForm) {
        let user = { surname: institutionForm.surname, otherNames: institutionForm.otherNames, email: institutionForm.email };
        let insitution = {
            name: institutionForm.name,
            registrationNumber: institutionForm.registrationNumber,
            postalNumber: institutionForm.postalNumber,
            postalCode: institutionForm.postalCode,
            postalCountry: institutionForm.postalCountry,
            postalTown: institutionForm.postalTown,
            users: [user]
        };
        return axios.post(baseUrl + 'institutions', insitution)
    }
}
