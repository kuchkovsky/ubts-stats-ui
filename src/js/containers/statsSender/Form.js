import { reduxForm } from 'redux-form/immutable';
import { validateForm } from '../../utils/reduxForm';
import Form from '../../components/statsSender/Form';
import fields from '../../schemas/statsSender';

export const formName = 'StatsSenderForm';

const StatsSenderForm = reduxForm({
  form: formName,
  validate: validateForm(fields),
  enableReinitialize: true,
})(Form);

export default StatsSenderForm;
