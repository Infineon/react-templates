import { IfxTextField } from '@infineon/infineon-design-system-react';
import './textfield.scss';

function TextField( { error, disabled, size, success, icon, placeholder, required, caption, optional, name, showDeleteIcon }) {
  return (
    <IfxTextField error={error} disabled={disabled} size={size} icon={icon} success={success} placeholder={placeholder} caption={caption} required={required} optional={optional} name={name} show-delete-icon={showDeleteIcon}>Label</IfxTextField>
  );
}

export default TextField;