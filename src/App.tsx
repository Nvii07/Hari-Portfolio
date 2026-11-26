import LoupeCuratorLanding from "@/components/ui/loupe-curator-landing"

export default function LoupeCuratorLandingDemo() {
  return (
    <LoupeCuratorLanding
      brand="Hariharan"
      launch="Bengaluru · Graphic Designer"
      signInAction={{ label: "Resume", href: "#resume" }}
      joinAction={{ label: "Email me", href: "mailto:harivijay0077@gmail.com" }}
    />
  )
}
