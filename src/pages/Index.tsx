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
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent clip-v-logo transition-all group-hover:scale-110 glow-border" />
                <div className="absolute inset-2 bg-gradient-to-br from-background to-secondary clip-v-inner" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Vmapire</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Gaming Panel</p>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Premium Gaming Panels</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Dominate With</span>
                  <br />
                  <span className="gradient-text glow-text">KDA Features</span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-lg">
                  Unleash your full potential with premium gaming panels. Custom designs, unlimited features, and 24/7 support.
                </p>
                
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary-glow rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <Button
                    size="lg"
                    className="relative px-10 py-7 text-lg font-bold bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-accent-foreground shadow-2xl transition-all"
                  >
                    <Sparkles className="w-6 h-6 mr-2" />
                    Purchase Now!
                  </Button>
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">
              <span className="text-foreground">Menu </span>
              <span className="gradient-text glow-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg">Choose the perfect panel for your needs</p>
          </div>

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
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">
              <span className="text-foreground">Our </span>
              <span className="gradient-text glow-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg">Transparent pricing, premium quality</p>
          </div>

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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">
              <span className="gradient-text glow-text">Contact</span>{" "}
              <span className="text-foreground">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">Get in touch with our team</p>
          </div>

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
