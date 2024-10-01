let HomePage;
import template01 from './template-01/HomePage';
import template02 from './template-02/HomePage';

if(template01) { 
  HomePage = template01; 
} else {
  HomePage = template02;
}

export default HomePage;