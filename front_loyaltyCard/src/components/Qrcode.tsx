import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

async function generateQR(text: string): Promise<string> {
    try {
      return await QRCode.toDataURL(text)
    } catch (err) {
      console.error(err)
    }
    return ""
}


function  Qrcode(){
    const [qrcode, setQrcode] = useState('');
    const [text, setText] = useState("");
    return (
        <div>
            <h1>Qrcode</h1>
            <button onClick={() => {
                const name = uuidv4();
                generateQR(name).then(qrcode =>{ 
                    setQrcode(qrcode)
                    setText(name)
                });
            }}>Generate QR</button>
            <h2>
                {qrcode && <img src={qrcode} alt="qrcode" />}
            </h2>
            <h2>{text}</h2>
            
        </div>
    )
}

export default Qrcode