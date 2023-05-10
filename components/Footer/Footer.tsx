import { FC } from "react"
import { Footer as F, Navbar } from "flowbite-react"
import { Logo } from "@/components/Logo/Logo"

import { githubProfileLink, socialLinks } from "@/public/links"

import footerStyles from "./Footer.module.css"
import layoutStyles from "../Layout/Layout.module.css"

export const Footer: FC = () => {
  return (
    <F container={true} className={layoutStyles.footerContainer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.logoBox}>
          <Navbar.Brand href={githubProfileLink} target="_blank">
            <Logo />
          </Navbar.Brand>
        </div>
        <F.Divider />
        <div className={footerStyles.copyrightBox}>
          <F.Copyright href={githubProfileLink} by="Crop Wizard™" year={2023} />
          <div className={footerStyles.linksBox}>
            {socialLinks.map(({ link, icon }) => (
              <F.Icon
                href={link}
                icon={icon}
                key={link}
                className={footerStyles.linkHover}
              />
            ))}
          </div>
        </div>
      </div>
    </F>
  )
}
