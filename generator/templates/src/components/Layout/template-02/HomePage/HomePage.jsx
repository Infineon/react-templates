import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import TextField from '../TextField/TextField';
import Stepper from '../Stepper/Stepper';
import RadioButton from '../RadioButton/RadioButton';
import DatePicker from '../DatePicker/DatePicker';
import './homePage.scss';


function HomePage() {

  return (
    <div className='container'>
      <div className="navbar__wrapper">
        <Navbar />
      </div>
      <div className="main__wizard-template-wrapper">

        <div className="stepper__wrapper">
          <div className="stepper">
            <Stepper activeStep={1} showStepNumber={false} variant="default" />
          </div>
        </div>

        <div className="content__wrapper">
          <div className="form__wrapper">
            <div className="tittle__wrapper">Your data</div>

            <div className="section__wrapper">
              <div className="section">
                <div className="section__title-wrapper">Personal data</div>
                <div className="radio__button-wrapper">
                  <RadioButton error="false" disabled="false" checked="false" size="s" name="radio-button" value="radio" />
                  <RadioButton error="false" disabled="false" checked="false" size="s" name="radio-button" value="radio" />
                  <RadioButton error="false" disabled="false" checked="false" size="s" name="radio-button" value="radio" />
                </div>
                <div className="input__fields-wrapper">
                  <div className="text__fields-wrapper">
                    <div className="text__field">
                      <TextField error="false" disabled="false" size="m" icon="c-info-16" success="false" placeholder="Placeholder" caption="First Name" required="true" optional="false" name="text-field" show-delete-icon="false" />
                    </div>
                    <div className="text__field">
                      <TextField error="false" disabled="false" size="m" icon="c-info-16" success="false" placeholder="Placeholder" caption="Last Name" required="true" optional="false" name="text-field" show-delete-icon="false" />
                    </div>
                  </div>
                  <div className="date__picker-wrapper">
                    <div className="date__picker">
                      <DatePicker error="false" disabled="false" size="s" success="false" value="" max="" min="" label="Date of Birth" caption="Caption text, description, error notification" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section__title-wrapper">Contact details</div>
                <div className="input__fields-wrapper">
                  <div className="text__fields-wrapper">
                    <div className="text__field">
                      <TextField error="false" disabled="false" size="m" icon="c-info-16" success="false" placeholder="Placeholder" caption="Email" required="true" optional="false" name="text-field" show-delete-icon="false" />
                    </div>
                    <div className="text__field">
                      <TextField error="false" disabled="false" size="m" icon="c-info-16" success="false" placeholder="Placeholder" caption="Phone (optional)" required="true" optional="false" name="text-field" show-delete-icon="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn__wrapper">
              <Button />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage;
