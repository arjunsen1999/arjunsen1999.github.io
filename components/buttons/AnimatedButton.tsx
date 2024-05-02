import React from "react";

export default function AnimatedButton({
  className,
  name,
}: {
  className?: string;
  name: string;
}) {

    const handleDownloadCV = () => {
        // Path to your CV file
        const cvUrl = '/assets/Arjun_Sen_Resume.pdf';
        
        // Download CV
        const downloadLink = document.createElement('a');
        downloadLink.href = cvUrl;
        downloadLink.download = 'Arjun_Sen_Resume.pdf'; // Change the name if needed
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Open CV in a new window
        window.open(cvUrl, '_blank');
      };

  return <button onClick={handleDownloadCV} className={` ${className}`}>{name}</button>;
}
