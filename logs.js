// Static logs data for the 1999 Camaro Project Website
const projectLogs = [
  {
    id: "birthday-surprise",
    date: "November 21, 2023",
    title: "The Ultimate Birthday Surprise",
    category: "general",
    difficulty: 0,
    time: "1 hour",
    cost: "$0 (Gift)",
    image: "assets/birthday_bow.jpg",
    summary: "How my wife surprised me with my dad's old 1999 Camaro, complete with a giant red bow, reversing years of regret and bringing a piece of my childhood back into my driveway.",
    content: `
      <p>My dad bought a 1999 Camaro brand new when I was 12 or 13 years old. To me, it was the coolest thing on four wheels. But as I grew older and learned more about cars, I realized the fourth-generation Camaro wasn't exactly loved. People mocked its front-end design, calling it the "catfish Camaro." It was a V6, not the legendary LS1 V8. It was an automatic, not a manual. It was a convertible, which meant it lacked the "macho" credentials of standard muscle cars. Every metric told me I shouldn't love this car—but I loved it anyway.</p>
      
      <p>Decades later, my dad told me he was getting rid of it. The car had sat for years and needed substantial work. Given the reliability concerns and the time it would require, I sadly told him no. I couldn't justify bringing a "toy car" home. I regretted that decision immediately.</p>
      
      <p>Then came my birthday. My wife told me to look out front, and there it was: my dad's 1999 Camaro, complete with a massive red bow. She had arranged it all behind my back as a surprise gift. I was speechless. This site is the documentation of my journey returning this catfish to its former glory, learning how to wrench, and making it my own.</p>
    `,
    tags: ["Story", "Family", "Nostalgia"]
  },
  {
    id: "drivetrain-overhaul",
    date: "October 5, 2023",
    title: "The Core Foundation: Major Gasket & Rear End Overhaul",
    category: "general",
    difficulty: 5,
    time: "30+ hours",
    cost: "$450 (Parts)",
    image: "assets/drivetrain.jpg",
    summary: "Tackling the heavy mechanical overhauls immediately after receiving the car: drive belt, coolant flush, thermostat, oil pan gasket, rear end rebuild, and the dreaded rear main seal.",
    content: `
      <p>Before this car could be a reliable cruiser, it needed serious mechanical attention. It had spent years slow-dripping oil and coolant, and the rear differential was making a faint whirring noise that spelled trouble. Over a grueling week in early October, I decided to tackle the entire drivetrain foundation.</p>
      
      <p>The biggest hurdle was the <strong>Rear Main Seal</strong>. On an F-body chassis, this requires dropping the transmission to gain access to the back of the engine block. I pulled the 4L60E transmission, supported the engine, carefully removed the worn-out oil seal, and tapped a new double-lip seal into place. While the transmission was out, I also replaced the leaking <strong>Oil Pan Gasket</strong>, installed a fresh <strong>Drive Belt</strong>, replaced the sticky <strong>Thermostat</strong>, and did a complete <strong>Coolant Flush</strong>.</p>
      
      <p>Finally, I cracked open the rear differential. The gears showed wear, so I did a complete <strong>Rear End Rebuild</strong> with new bearings, seals, and fresh gear oil. It was exhausting work, but the Camaro now runs bone-dry and rolls in near-silence. The foundation was officially set.</p>
    `,
    tags: ["Engine", "Mechanical", "Transmission", "Differential"]
  },
  {
    id: "led-lighting-conversion",
    date: "January 1, 2024",
    title: "Facelift: Autosaver88 Headlights & Full LED Conversion",
    category: "electrical",
    difficulty: 2,
    time: "5 hours",
    cost: "$165",
    image: "assets/headlights.jpg",
    summary: "Replacing foggy factory headlights with black housing clear lens assemblies. Upgrading all bulbs—mains, brights, reverse, and flashers—to modern LEDs with proper relays.",
    content: `
      <p>The fourth-generation "catfish" facelift is defined by its sweeping headlight housings. Unfortunately, 25 years of sun exposure had oxidized the lenses into a foggy, yellowed mess that ruined the car's appearance and made night driving hazardous. To kick off 2024, I ordered a set of black housing Autosaver88 clear lens headlight assemblies.</p>
      
      <p>Removing the housings is thankfully simple on these F-bodies, relying on retaining pins. While the housings were out, I did a full lighting modernization. I swapped the low beams, high beams, reverse lights, and corner indicators to super bright 3030-chipset LEDs. </p>
      
      <p>Because LEDs draw less current, they cause the factory blinker module to think a bulb is out, resulting in "hyper-flashing." To fix this, I replaced the stock flasher relays under the dashboard with electronic LED-compatible flasher relays. The result is incredible: the front end looks sharp and aggressive with the black housings, and the night visibility is modern-car levels of bright.</p>
    `,
    tags: ["Electrical", "Cosmetics", "LED", "Safety"]
  },
  {
    id: "steering-wheel-wrap",
    date: "December 1, 2024",
    title: "Interior Restoration: Stitch-On Leather Steering Wheel Wrap",
    category: "cosmetics",
    difficulty: 3,
    time: "4 hours",
    cost: "$20",
    image: "assets/steering_wheel.jpg",
    summary: "Detailing the interior touchpoints by stitching a custom BMLEI genuine leather steering wheel cover wrap directly onto the worn factory steering wheel.",
    content: `
      <p>The late-90s GM interior is infamous for its cheap, hard plastics and thin steering wheels that tend to degrade and become sticky over time. My Camaro's steering wheel was showing its age, with faded material and worn grip surfaces that made driving feel less than premium.</p>
      
      <p>Rather than putting on a bulky slip-on cover, I ordered a BMLEI genuine leather stitch-on wrap. These wraps require patience: you line up the leather cover, and then using a heavy-duty needle and wax thread, you manually stitch the cover through the pre-punched holes in a cross-stitch pattern around the entire circumference of the wheel.</p>
      
      <p>It took four hours of continuous, meticulous hand sewing, pulling every stitch tight to ensure zero slack. The result feels amazing—it added thickness to the grip, the genuine leather feels premium, and it looks like a factory leather-wrapped wheel from a high-end trim package.</p>
    `,
    tags: ["Interior", "Cosmetics", "Restoration", "Leather"]
  },
  {
    id: "headunit-cameras",
    date: "March 1, 2024",
    title: "Modern Tech: Upgraded Head Unit & Dual Parking Cameras",
    category: "electrical",
    difficulty: 3,
    time: "6 hours",
    cost: "$150",
    image: "assets/radio_cameras.jpg",
    summary: "Bringing the Camaro into the 2020s. Installing a modern bluetooth-enabled head unit and integrating both front and rear-facing parking cameras.",
    content: `
      <p>Cruising around Miami requires a soundtrack, but the factory radio lacked bluetooth or auxiliary inputs. More importantly, parking a long-hooded, low-slung 90s sports car in tight Miami parking spots is a recipe for scratched bumpers. I decided it was time to integrate modern tech into the cockpit.</p>
      
      <p>I installed a double-DIN head unit in the center dash, routing the wiring through a custom adapter harness to preserve the factory Monsoon amplifier and speaker setup. To solve the visibility issues, I ran video cables through the floorboards to install a rear backup camera above the license plate and a front-facing parking camera in the lower grille insert.</p>
      
      <p>The cameras feed directly to the head unit's screen. Now I can parallel park on Ocean Drive with millimeter precision and stream music from my phone, all while retaining the high-performance sound of the stock Monsoon audio system.</p>
    `,
    tags: ["Audio", "Electrical", "Camera", "Tech"]
  },
  {
    id: "suspension-springs",
    date: "June 2, 2024",
    title: "Stance & Handling: Lowering Springs & Suspension Refresh",
    category: "cruising",
    difficulty: 4,
    time: "8 hours",
    cost: "$280",
    image: "assets/suspension.jpg",
    summary: "Eliminating the stock 4th-gen floaty ride. Installing sport lowering springs, refreshing suspension bushings, and mounting a fresh set of tires.",
    content: `
      <p>Fourth-generation Camaros came from the factory with a surprisingly high ride height and soft suspension tuning, giving them a floaty, boatsman-like ride in corners. To get the sleek, aggressive muscle car stance the car deserved, I tackled the suspension in June.</p>
      
      <p>I installed a set of sport lowering springs, which dropped the ride height by about 1.5 inches, lowering the center of gravity and filling the wheel arches. While the springs were off, I inspected the dampers and refreshed worn control arm bushings. Finally, I had a fresh set of performance tires mounted and aligned.</p>
      
      <p>The change in driving dynamics is night and day. The body roll in sharp Miami corners is virtually gone, the steering feedback is crisp, and the car looks incredibly sleek sitting closer to the pavement. It finally handles like a true sports cruiser.</p>
    `,
    tags: ["Suspension", "Chassis", "Handling", "Tires"]
  },
  {
    id: "cooling-maintenance",
    date: "September 8, 2024",
    title: "Miami Summer Maintenance: Alternator & Cooling Tune-Up",
    category: "general",
    difficulty: 3,
    time: "5 hours",
    cost: "$175",
    image: "assets/cooling_tuneup.jpg",
    summary: "Preventing summer overheating. Replacing the alternator, tensioner pulley, heater hose assembly, and doing a routine oil change and coolant top-off.",
    content: `
      <p>Miami summers are brutal on cars—the combination of 95°F heat and high humidity will expose any weakness in your cooling or electrical systems. In September, after noticing the volt meter dipping, I performed a comprehensive preventative maintenance run.</p>
      
      <p>First, I replaced the failing <strong>Alternator</strong> with a new high-output unit to handle the stereo and headlights. Next, I replaced the squeaking <strong>Tensioner Pulley</strong> to prevent belt slippage. The big job was replacing the aging heater hoses with a fresh V6 heater hose repair kit, preventing a sudden burst under pressure. I wrapped it up with a routine oil change and a coolant flush refill. The engine now runs cool and charges solid, ready for any traffic jam.</p>
    `,
    tags: ["Maintenance", "Cooling", "Electrical", "Engine"]
  },
  {
    id: "exhaust-hanger-fix",
    date: "January 26, 2025",
    title: "Exhaust Pipe Sag Repair: Rubber Hanger Replacement",
    category: "general",
    difficulty: 2,
    time: "1 hour",
    cost: "$15",
    image: "assets/exhaust_hanger_fix.jpg",
    summary: "Fixing the annoying exhaust tailpipe sag by replacing the dry-rotted rubber exhaust hanger mount under the bumper.",
    content: `
      <p>A common minor but unsightly issue on fourth-generation Camaros is a saggy exhaust tailpipe, which usually happens when the original rubber hangers dry-rot and stretch after decades of heat exposure. On January 16, 2025, I noticed my left exhaust tip hanging significantly lower than the right one.</p>
      
      <p>To fix this, I ordered a new heavy-duty rubber exhaust hanger isolator bracket. The repair is simple but requires a bit of muscle to slide the metal exhaust hangers out of the old rubber grommets. Using some silicone spray lubricant and a prying tool, I popped the old worn hanger off and pressed the new rubber mount onto the chassis pin and exhaust pin. The tailpipe popped right back into its correct position, perfectly level with the bumper cutouts.</p>
    `,
    tags: ["Maintenance", "Exhaust", "Rubber Hanger", "DIY"]
  },
  {
    id: "obd-egr-diagnostics",
    date: "May 21, 2025",
    title: "Diagnostics: OBD2 Scanner & EGR Flow Code (P0401)",
    category: "electrical",
    difficulty: 1.5,
    time: "30 mins",
    cost: "$0",
    image: "assets/obd_egr_code.jpg",
    summary: "Scanning the check engine light using an OBD2 scanner. Diagnosed trouble code P0401 (EGR Flow Insufficient), indicating a future EGR tube project.",
    content: `
      <p>During a routine cruise, the yellow "Check Engine" light illuminated on the dashboard. I plugged in my OBD2 scanner to the diagnostic port under the steering column to retrieve the diagnostic trouble code (DTC).</p>
      
      <p>The scan returned a single code: <strong>P0401 - Exhaust Gas Recirculation (EGR) Flow Insufficient</strong>. This code points to a restriction in the EGR valve or the metal EGR tube that channels exhaust gases back to the intake manifold for emissions control. I cleared the code to see if it would return immediately, which it did after a short drive. Since it doesn't affect driveability immediately, I've added "EGR Tube" and EVAP inspections to my future checklist items to tackle as a weekend project.</p>
    `,
    tags: ["Diagnostics", "OBD2", "EGR", "Electrical"]
  },
  {
    id: "ppf-protection",
    date: "July 2, 2025",
    title: "Paint Protection Film (PPF) Application",
    category: "cosmetics",
    difficulty: 3,
    time: "4 hours",
    cost: "$350 (Shop)",
    image: "assets/ppf_shop.jpg",
    summary: "Adding premium Paint Protection Film (PPF) to the front bumper and hood at the styling shop to protect the paint correction work.",
    content: `
      <p>To protect the front bumper and nose from rock chips and road debris on the Miami highways, I took the Camaro to a local auto styling shop to have Paint Protection Film (PPF) applied to the front fascia.</p>
      
      <p>The installers prepped the nose, corrected any minor surface blemishes, and applied a computer-cut clear film over the entire front bumper, headlights, and lead edge of the hood. The film is virtually invisible but provides a tough, self-healing barrier against road grit and bugs. It looks incredibly glossy and preserves the paint correction work underneath.</p>
    `,
    tags: ["PPF", "Paint Protection", "Cosmetics", "Shop Work"]
  },
  {
    id: "convertible-window-reseal",
    date: "September 3, 2025",
    title: "Convertible Disaster: Rear Glass Window Reseal",
    category: "convertible",
    difficulty: 4,
    time: "8 hours",
    cost: "$250 (Shop)",
    image: "assets/convertible_window_repaired.jpg",
    summary: "Dealing with a separated rear convertible window. After it dropped completely, the car was towed to a professional upholstery shop for a full glass-to-fabric reseal.",
    content: `
      <p>The rear window glass on 4th-gen convertible tops is glued directly to the vinyl/canvas fabric. Over time, the Miami humidity and sun degrade the factory adhesive, causing the glass to separate. In August 2025, I noticed the top edge starting to pull away. By September 3, the seal failed completely and the glass window dropped entirely into the convertible well, exposing the interior.</p>
      
      <p>Because doing a proper, watertight window reseal requires specific heat-cured urethane adhesives and specialized clamping fixtures to prevent canvas shrinkage, I decided this was beyond a DIY driveway job. I had the car towed to a professional upholstery shop. They pulled the canvas taut, cleaned the old adhesive channels, and used high-strength window urethane to clamp and cure the glass back to the convertible top fabric. It passed a water-leak test beautifully and looks as good as new.</p>
    `,
    tags: ["Convertible Top", "Cosmetics", "Body", "Restoration"]
  },
  {
    id: "breathing-spark",
    date: "September 3, 2025",
    title: "Ignition Tune-Up: Coil Packs & Filters",
    category: "electrical",
    difficulty: 2.5,
    time: "4 hours",
    cost: "$110",
    image: "assets/ignition_tuneup.jpg",
    summary: "Restoring throttle response. Upgrading to a K&N lifetime air filter, replacing the fuel filter, and installing ENA ignition coil packs.",
    content: `
      <p>After a year of cruising, the throttle response on the 3.8L V6 felt slightly soft. To restore the engine's pull, I performed a complete spark and air flow refresh in late 2025.</p>
      
      <p>I started by replacing the three factory ignition coil packs with a new set of ENA heavy-duty coil packs, giving the engine a stronger, more consistent spark. Next, I swapped out the old paper air filter for a high-flow <strong>K&N Lifetime Air Filter</strong> and replaced the under-car inline <strong>Fuel Filter</strong>. </p>
      
      <p>The V6 idle is now buttery smooth, and the mid-range throttle response feels sharp and rejuvenated.</p>
    `,
    tags: ["Ignition", "Coil Packs", "Maintenance", "Filters"]
  },
  {
    id: "oil-change-battery-2026",
    date: "February 1, 2026",
    title: "2026 Readiness: K&N Synthetic Service & Emergency Gear",
    category: "general",
    difficulty: 1.5,
    time: "2 hours",
    cost: "$120",
    image: "assets/oil_change_2026.jpg",
    summary: "Performing a fresh synthetic oil service using premium K&N oil and filter, and adding a heavy-duty GOOLOO battery jump box to the trunk toolkit.",
    content: `
      <p>Cruising under the Florida sun requires absolute reliability. In early 2026, I performed a standard high-mileage oil service to keep the 3800 V6 block happy, and upgraded my emergency roadside preparation gear.</p>
      
      <p>I drained the old oil and serviced the engine with 5 quarts of premium <strong>K&N 5W-30 Synthetic Motor Oil</strong>, paired with a matching heavy-duty <strong>K&N Select Oil Filter</strong>. The synthetic formula offers superior thermal protection against traffic heat. </p>
      
      <p>To address electrical peace of mind, I added a <strong>GOOLOO A3 Jump Starter & Air Compressor</strong> box to my trunk tools. It delivers 3000A booster power to jump-start a dead battery instantly and includes a built-in tire inflator. Now, whether it's a minor tire pressure drop or a low battery, I can handle it roadside without waiting for a tow truck.</p>
    `,
    tags: ["Maintenance", "Oil Change", "Safety", "Emergency", "Battery"]
  },
  {
    id: "detailing-polishing",
    date: "March 27, 2026",
    title: "Miami Glow: Paint Correction, Polishing & Detailing",
    category: "cosmetics",
    difficulty: 2,
    time: "6 hours",
    cost: "$45",
    image: "assets/car_polished.jpg",
    summary: "Detailing the V6 cruiser: paint correction, high-gloss machine polishing, and a detailed engine bay cleanup with new tools.",
    content: `
      <p>A proper Miami cruiser needs to shine. After years of sitting, the Mystic Teal paint had light swirl marks and oxidation. In March 2026, I set aside a full Saturday for detailing and paint correction.</p>
      
      <p>I started with a clay bar treatment to pull embedded contaminants out of the clearcoat, followed by a dual-action polisher with a medium-cut compound to eliminate swirls. I finished it off with a high-grade carnauba wax for a deep, wet-look reflection. To complete the work, I popped the hood and cleaned decades of road grime off the engine block, leaving the engine bay looking fresh and tidy for the next local car meet.</p>
    `,
    tags: ["Cosmetics", "Detailing", "Polishing", "Paint Correction"]
  },
  {
    id: "north-beach-car-show",
    date: "August 30, 2026",
    title: "Podium Finish: 2nd Place at North Beach Elementary Car Show",
    category: "cruising",
    difficulty: 0,
    time: "4 hours",
    cost: "Charity Donation",
    image: "assets/car_polished.jpg",
    summary: "The unloved catfish brings home 2nd place at the North Beach Elementary charity car show hosted by Box Box Car Club, winning over the kids against a sea of Porsche 911s.",
    content: `
      <p>For decades, car enthusiasts dismissed the fourth-generation "catfish" Camaro. Purists scoffed at the bio-design nose, noted it was a V6 instead of an LS1 V8, and pointed out the automatic transmission and convertible chassis flex. But all of that internet cynicism was completely shattered at the <strong>North Beach Elementary School Car Show</strong> in Miami Beach, hosted by <strong>Box Box Car Club</strong>.</p>
      
      <p>This wasn't an ordinary judged concourse—it was a charity event where the elementary school kids had the voting power to choose their favorite cars. The show field was packed with serious machinery, including exotic supercars and over a dozen very cool, high-dollar Porsche 911s.</p>
      
      <p>When the ballots were tallied, a Ferrari claimed 1st place. But in an incredible twist of voting math, the dozen 911s split their votes among themselves—leaving the door wide open for the kids to vote with pure heart. And who grabbed their attention? The glistening Mystic Teal 1999 Camaro convertible.</p>
      
      <p>Against all odds, the Catfish secured <strong>2nd Place Overall</strong>! Seeing the kids swarm the car, admire the polished teal paint, and celebrate a car my dad bought brand new in 1999 is the ultimate vindication. The car they said was unloved has officially become a crowd-favorite winner.</p>
    `,
    tags: ["Car Show", "Trophy", "Award", "Community", "Miami", "Box Box Car Club"]
  },
  {
    id: "end-of-summer-snapon",
    date: "September 12, 2026",
    title: "End of Summer Service: An Ode to Tim & The Snap-on Heritage",
    category: "general",
    difficulty: 1,
    time: "2 hours",
    cost: "$45 (Oil & Coolant)",
    image: "assets/snapon_tool_chest.jpg",
    summary: "Wrapping up summer with fresh synthetic oil, topped-off coolant, and dialed tire pressures—the very first service on the Camaro using 30 years of Snap-on tools inherited from my legendary neighbor and wrenching partner, Tim.",
    content: `
      <p>As summer draws to a close in Miami, it was time for seasonal preventative maintenance on the 3800 V6: a fresh synthetic oil and filter change, checking and inflating all four tires to factory pressure spec, and topping off the coolant overflow reservoir. On paper, it's the simplest routine driveway service you can perform on an F-body. But today, turning that 15mm oil drain bolt and replacing the filter felt profoundly different.</p>

      <p>This was my very first time wrenching on the Camaro using a complete, professional-grade <strong>Snap-on tool collection</strong>—inherited from my neighbor, Tim, who is packing up and moving away. Tim has been the undisputed best neighbor anyone could ever ask for. Over the years, we spent countless afternoons side by side on our driveways, swapping car stories, diagnosing mysterious noises, sharing cold drinks, and wrenching together. With his move, he handed down his pride and joy: an extraordinary royal blue Snap-on Lock 'n Roll roll cab packed with over <strong>30 years of tool collecting</strong>.</p>

      <div class="tribute-box">
        <p>"An oil change is such a simple task, but doing it with Snap-on tools is a whole other feel of premium luxury that was just absolutely incredible. This first turn of the ratchet is dedicated to Tim—the best neighbor, mentor, and driveway wrenching partner anyone could ask for."</p>
      </div>

      <div class="log-gallery-grid">
        <div class="log-gallery-item">
          <img src="assets/snapon_tool_chest.jpg" alt="Tim's Snap-on Lock 'n Roll Tool Chest">
          <div class="log-gallery-caption">Tim's royal blue Snap-on Lock 'n Roll roll cab with stainless work top.</div>
        </div>
        <div class="log-gallery-item">
          <img src="assets/snapon_tools_collection.jpg" alt="Organized Snap-on tool drawers">
          <div class="log-gallery-caption">30 years of collected Snap-on ratchets, sockets, wrenches, and specialty tools.</div>
        </div>
        <div class="log-gallery-item">
          <img src="assets/camaro_hood_creeper.jpg" alt="Camaro hood up with creeper ready">
          <div class="log-gallery-caption">Under the hood & on the creeper for end-of-summer maintenance.</div>
        </div>
      </div>

      <p>Anyone who has wrenched with budget tools knows the feeling of sloppy ratchet tolerances, flex in socket extensions, and rounded fasteners. Stepping up to Snap-on is night and day: the ultra-fine tooth ratchet mechanism engages with a smooth, authoritative, zero-backlash click. The chrome feels silky, the balance in your palm is weighted perfection, and sockets grip bolt heads with bank-vault rigidity. It transforms basic maintenance into pure mechanical luxury.</p>

      <p>With fresh 5W-30 synthetic oil circulating, tires inflated for crisp steering response, and the coolant level dialed in, the Catfish is running smooth and ready for fall top-down cruising. Tim, you will be dearly missed on our street, but every single time I pop the hood and grab a ratchet from this blue box, your passion and generosity will be right here keeping this Camaro alive.</p>
    `,
    tags: ["Maintenance", "Oil Change", "Snap-on", "Ode to Tim", "Tires", "Coolant", "Community"]
  }
];

// Complete Maintenance checklist data matching the Google Sheet
const maintenanceChecklist = [
  { item: "Drive Belt", date: "10/1/2023", done: "Yes", type: "recurring", mileageInterval: 30000, monthsInterval: 36, lastMileage: null, notes: "Gates serpentine belt" },
  { item: "Coolant Flush", date: "10/2/2023", done: "Yes" },
  { item: "Thermostat", date: "10/3/2023", done: "Yes" },
  { item: "Rear Main Seal", date: "10/4/2023", done: "Yes" },
  { item: "Oil Pan Gasket", date: "10/5/2023", done: "Yes" },
  { item: "Rear End Rebuilt", date: "10/5/2023", done: "Yes" },
  { item: "New Headlights", date: "1/1/2024", done: "Yes" },
  { item: "LED Brights", date: "1/1/2024", done: "Yes" },
  { item: "LED Main", date: "1/1/2024", done: "Yes" },
  { item: "LED Reverse", date: "1/1/2024", done: "Yes" },
  { item: "LED Flasher", date: "1/1/2024", done: "Yes" },
  { item: "Flasher Relays", date: "1/1/2024", done: "Yes" },
  { item: "Head Unit", date: "3/1/2024", done: "Yes" },
  { item: "Cameras", date: "3/1/2024", done: "Yes" },
  { item: "Lowering Springs", date: "6/1/2024", done: "Yes" },
  { item: "Suspension", date: "6/2/2024", done: "Yes" },
  { item: "Tires", date: "6/3/2024", done: "Yes", type: "recurring", mileageInterval: 40000, monthsInterval: 60, lastMileage: null, notes: "Performance tires" },
  { item: "Coolant Refill", date: "8/1/2024", done: "Yes" },
  { item: "Alternator", date: "9/8/2024", done: "Yes" },
  { item: "Oil Change", date: "9/8/2024", done: "Yes" },
  { item: "Coolant Flush", date: "9/8/2024", done: "Yes", type: "recurring", mileageInterval: 30000, monthsInterval: 36, lastMileage: null, notes: "Dex-Cool 50/50 mix" },
  { item: "Tensioner Pulley", date: "9/8/2024", done: "Yes" },
  { item: "Heater Hose", date: "9/8/2024", done: "Yes" },
  { item: "Steering Wheel Wrap", date: "12/1/2024", done: "Yes" },
  { item: "Fuel Filter", date: "1/1/2025", done: "Yes", type: "recurring", mileageInterval: 15000, monthsInterval: 24, lastMileage: null, notes: "Inline fuel filter under driver rail" },
  { item: "Air Filter", date: "1/1/2025", done: "Yes", type: "recurring", mileageInterval: 50000, monthsInterval: 48, lastMileage: null, notes: "K&N washable synthetic lifetime filter (clean & service interval)" },
  { item: "Exhaust Rubber Hanger", date: "1/26/2025", done: "Yes" },
  { item: "OBD2 EGR Diagnostics", date: "5/21/2025", done: "Yes" },
  { item: "PPF", date: "7/2/2025", done: "Yes" },
  { item: "Convertible Window Reseal", date: "9/3/2025", done: "Yes" },
  { item: "Ignition Coil", date: "9/3/2025", done: "Yes" },
  { item: "Battery", date: "2/1/2026", done: "Yes", type: "recurring", monthsInterval: 48, lastMileage: null, notes: "GOOLOO battery jump box & 12V test" },
  { item: "Oil Change (K&N Synthetic)", date: "2/1/2026", done: "Yes", notes: "K&N Synthetic 5W-30" },
  { item: "Paint Polish & Detailing", date: "3/27/2026", done: "Yes" },
  { item: "North Beach Elementary Car Show (2nd Place)", date: "8/30/2026", done: "Yes", notes: "Hosted by Box Box Car Club - Kids' Choice Award!" },
  { item: "Oil Change", date: "9/12/2026", done: "Yes", type: "recurring", mileageInterval: 3000, monthsInterval: 6, lastMileage: null, notes: "End-of-summer service with Tim's Snap-on tools" },
  { item: "Tire Inflation & Pressure Check", date: "9/12/2026", done: "Yes", notes: "Inflated all 4 tires to spec for end-of-summer maintenance" },
  { item: "Coolant Top-Off", date: "9/12/2026", done: "Yes", notes: "Topped off coolant overflow reservoir" },
  
  // Future Items
  { item: "Lower Intake Manifold Gasket", date: "Future", done: "Future" },
  { item: "Head Gasket", date: "Future", done: "Future" },
  { item: "Spark Plugs", date: "Future", done: "Future" },
  { item: "EGR Tube", date: "Future", done: "Future" },
  { item: "manifold-to-downpipe gaskets", date: "Future", done: "Future" },
  { item: "Exhaust Manifold Gasket", date: "Future", done: "Future" },
  { item: "Motor Mounts", date: "Future", done: "Future" },
  { item: "Water Pump", date: "Future", done: "Future" },
  { item: "EVAP System Check", date: "Future", done: "Future" }
];
