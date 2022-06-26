import React from 'react';

const Footer = () => {
    return (
        <div>
            <p style={{textAlign: 'center',background:' #999fae',padding:'30px',marginBottom:0,color:'white'}}> Copyright &copy; 2022-<script>document.write(new Date().getFullYear())</script> Your Name All Rights Reserved</p>
        </div>
    );
};

export default Footer;