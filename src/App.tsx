import EaselShowcaseTemplate from "@/components/ui/easel-showcase-template"
import { PROFILE } from "@/data/portfolio"

export default function App() {
  return <EaselShowcaseTemplate email={PROFILE.email} />
}
