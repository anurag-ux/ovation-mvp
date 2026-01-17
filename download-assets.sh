#!/bin/bash

# Create directories
mkdir -p public/logos public/icons public/images

echo "📥 Downloading assets..."

# Download logos
echo "Downloading logos..."
curl -L -o "public/logos/ovation-logo.svg" "https://www.ovationwps.com/Ovationwps.svg"
curl -L -o "public/logos/ovation-logo.png" "https://www.ovationwps.com/Ovationwps.png"

# Download social icons
echo "Downloading social icons..."
curl -L -o "public/icons/facebook.svg" "https://admin.ovationwps.com/files/fb-01%20(1).svg"
curl -L -o "public/icons/instagram.svg" "https://admin.ovationwps.com/files/inst-01%20(1).svg"
curl -L -o "public/icons/twitter.svg" "https://admin.ovationwps.com/files/twitter-01%20(2).svg"
curl -L -o "public/icons/linkedin.svg" "https://admin.ovationwps.com/files/in-01%20(1).svg"

# Download core values icons
echo "Downloading core values icons..."
curl -L -o "public/icons/integrity-ethics.svg" "https://admin.ovationwps.com/files/Integrity-and-Ethics-012d3541.svg"
curl -L -o "public/icons/transparency.svg" "https://admin.ovationwps.com/files/Transparency-01ac6c5b.svg"
curl -L -o "public/icons/customer-centric.svg" "https://admin.ovationwps.com/files/Customer-Centric-Focus-0123046d.svg"

# Download service icons
echo "Downloading service icons..."
curl -L -o "public/icons/field-service.svg" "https://admin.ovationwps.com/files/field.svg"
curl -L -o "public/icons/staff-service.svg" "https://admin.ovationwps.com/files/staff-white.svg"
curl -L -o "public/icons/professional-service.svg" "https://admin.ovationwps.com/files/Professional-white.svg"
curl -L -o "public/icons/managed-service.svg" "https://admin.ovationwps.com/files/managed-white.svg"

# Download why choose us icons
echo "Downloading why choose us icons..."
curl -L -o "public/icons/experience.svg" "https://admin.ovationwps.com/files/experence.svg"
curl -L -o "public/icons/team.svg" "https://admin.ovationwps.com/files/team1.svg"
curl -L -o "public/icons/record.svg" "https://admin.ovationwps.com/files/record1.svg"
curl -L -o "public/icons/solutions.svg" "https://admin.ovationwps.com/files/solutions.svg"

# Download statistics icons
echo "Downloading statistics icons..."
curl -L -o "public/icons/self.svg" "https://admin.ovationwps.com/files/self-white.svg"
curl -L -o "public/icons/offered.svg" "https://admin.ovationwps.com/files/offered-white.svg"
curl -L -o "public/icons/success.svg" "https://admin.ovationwps.com/files/sucess-white.svg"

# Download contact icons
echo "Downloading contact icons..."
curl -L -o "public/icons/call.svg" "https://admin.ovationwps.com/files/call-0137abb9.svg"
curl -L -o "public/icons/mail.svg" "https://admin.ovationwps.com/files/mail-01b083e7.svg"

# Download background images
echo "Downloading background images..."
curl -L -o "public/images/hero-bg.jpg" "https://admin.ovationwps.com/files/hero.jpg"
curl -L -o "public/images/tab-bg.png" "https://www.ovationwps.com/tab-bg.png"
curl -L -o "public/images/counter-bg.png" "https://www.ovationwps.com/counter-bg.png"
curl -L -o "public/images/footer-bg.png" "https://www.ovationwps.com/footerbg.png"

# Download certificates
echo "Downloading certificates..."
curl -L -o "public/logos/iso-9001.svg" "https://www.ovationwps.com/footer/certificate1.svg"
curl -L -o "public/logos/iso-27001.svg" "https://www.ovationwps.com/footer/certificate2.svg"
curl -L -o "public/logos/nmsdc.jpg" "https://www.ovationwps.com/footer/certificate3.jpg"

# Download other icons
echo "Downloading other icons..."
curl -L -o "public/icons/arrow-white.svg" "https://www.ovationwps.com/Arrow/arrowWhite.svg"
curl -L -o "public/icons/talk-us.svg" "https://www.ovationwps.com/talkUs.svg"

echo "✅ All assets downloaded successfully!"
echo "📁 Assets are in: public/logos, public/icons, public/images"
