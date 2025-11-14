import { Badge } from "@/components/Badge";
import { PanelCard } from "@/components/PanelCard";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { DollarSign, Headphones, Package, Sparkles } from "lucide-react";
import { SiDiscord, SiTelegram } from "react-icons/si";
import soldierImage from "@/assets/soldier.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-8">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 clip-v-logo" />
                <div className="absolute inset-2 bg-gradient-to-br from-foreground to-muted-foreground clip-v-inner" />
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <Badge icon={DollarSign} text="Best prices" />
              <Badge icon={Headphones} text="24/7 Support" />
              <Badge icon={Package} text="Always in stock" />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-lg text-muted-foreground">KDA Features</h2>
                
                <div className="relative inline-block">
                  <Button
                    size="lg"
                    className="relative px-8 py-6 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Purchase Now!
                  </Button>
                  <div className="absolute -left-4 -top-4 text-accent animate-pulse">✦</div>
                  <div className="absolute -right-4 top-0 text-accent/70 animate-pulse delay-75">✦</div>
                  <div className="absolute -left-2 -bottom-2 text-accent/50 animate-pulse delay-150">✦</div>
                </div>
              </div>
            </div>

            {/* Character Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent blur-3xl" />
              <img
                src={soldierImage}
                alt="Tactical Operator"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Menu Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PanelCard
              title="PANEL 1"
              price="120$"
              features={[
                "Price 120$ ( Unlimited Panel )",
                "Custom Name",
                "Custom Design",
                "Custom Color",
                "All Future",
              ]}
            />

            <PanelCard
              title="PANEL 2"
              price="90$"
              features={[
                "Price 90$ ( Unlimited Panel )",
                "Custom Name",
                "Custom Design",
                "Custom Color",
                "All Future",
              ]}
            />

            <PanelCard
              title="PANEL 3"
              price="60$"
              isReseller
              features={[
                "Price 60$ ( Unlimited Panel )",
                "For Two Month",
              ]}
            />

            <PanelCard
              title="PANEL 4"
              price="40$"
              isReseller
              features={[
                "Price 40$ ( Unlimited Panel )",
                "For One Month",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard title="Panel 1" price="120$" duration="2 month" />
            <PricingCard title="Panel 2" price="90$" duration="2 Month" />
            <PricingCard title="Panel 3" price="60$" duration="2 Month" />
          </div>
        </div>
      </section>

      {/* Discord Link */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="px-8 py-4 rounded-xl border-2 border-border bg-secondary/30 backdrop-blur-sm">
            <a
              href="https://discord.gg/JCJmehyTpu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-mono text-foreground hover:text-accent transition-colors"
            >
              https://discord.gg/JCJmehyTpu
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-accent">Contact</span>{" "}
            <span className="text-foreground">Us</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://discord.gg/JCJmehyTpu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-border bg-secondary/30 hover:border-accent hover:bg-accent/10 transition-all group"
            >
              <SiDiscord className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono text-foreground group-hover:text-accent transition-colors">
                https://discord.gg/JCJmehyTpu
              </span>
            </a>

            <a
              href="https://t.me/Re1urn_null"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-border bg-secondary/30 hover:border-accent hover:bg-accent/10 transition-all group"
            >
              <SiTelegram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono text-foreground group-hover:text-accent transition-colors">
                https://t.me/Re1urn_null
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
