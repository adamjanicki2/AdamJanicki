import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from "react";
import "./IconBar.css";

class IconBar extends Component {
    constructor(props) {
      super(props);
      
    }

    render() {
      return (
        <div className='Icon-container'>
            <a className='logoicon' rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/adam-janicki-093859197/'><FontAwesomeIcon icon={faLinkedinIn} size={'3x'}/></a>
            <a className='logoicon' rel="noreferrer" target='_blank' href='https://github.com/adamjanicki2/'><FontAwesomeIcon icon={faGithubSquare} size={'3x'}/></a>
            <a className='logoicon' rel="noreferrer" target='_blank' href = '/AdamJanicki/AdamJanickiResume.pdf'><FontAwesomeIcon icon={faFilePdf} size={'3x'}/></a>
            <a className='logoicon' rel="noreferrer" href='mailto:ajanicki@mit.edu'><FontAwesomeIcon icon={faEnvelopeSquare} size={'3x'}/></a>
        </div>
      );
    }
  }
  
  export default IconBar;