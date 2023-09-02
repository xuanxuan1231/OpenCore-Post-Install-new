(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{391:function(e,t,a){e.exports=a.p+"assets/img/agdc.d3314b17.png"},392:function(e,t,a){e.exports=a.p+"assets/img/tsc.89adc3ad.png"},393:function(e,t,a){e.exports=a.p+"assets/img/asus-tsc.2397797f.png"},394:function(e,t,a){e.exports=a.p+"assets/img/asus-tsc-2.029ce318.png"},497:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fixing-sleep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-sleep"}},[e._v("#")]),e._v(" Fixing Sleep")]),e._v(" "),t("p",[e._v("So to understand how to fix sleep issues in macOS, we need to first look at what contributes to sleep issues most of the time:")]),e._v(" "),t("ul",[t("li",[e._v("Incorrectly managed devices(most commonly PCIe based devices)")])]),e._v(" "),t("p",[e._v("The reason for this is when devices get an S3 call(or S0 for wake), the driver needs to power down the devices and put into a low state mode(vice versa when waking). Problems arise when such devices don't cooperate with the drivers and the main offenders of these issues are:")]),e._v(" "),t("ul",[t("li",[e._v("USB Controllers and Devices")]),e._v(" "),t("li",[e._v("GPUs")]),e._v(" "),t("li",[e._v("Thunderbolt Controllers and Devices")]),e._v(" "),t("li",[e._v("NICs(Both Ethernet and Wifi)")]),e._v(" "),t("li",[e._v("NVMe Drives")])]),e._v(" "),t("p",[e._v("And there are others that can cause sleep issues that aren't directly(or obviously) related to PCI/e:")]),e._v(" "),t("ul",[t("li",[e._v("CPU Power Management")]),e._v(" "),t("li",[e._v("Displays")]),e._v(" "),t("li",[e._v("NVRAM")]),e._v(" "),t("li",[e._v("RTC/System Clocks")]),e._v(" "),t("li",[e._v("IRQ Conflicts")]),e._v(" "),t("li",[e._v("Audio")]),e._v(" "),t("li",[e._v("SMBus")]),e._v(" "),t("li",[e._v("TSC")])]),e._v(" "),t("p",[e._v("And something many people forget are over and under-clocks:")]),e._v(" "),t("ul",[t("li",[e._v("CPUs\n"),t("ul",[t("li",[e._v("AVX often breaks iGPUs and hurt overall stability")])])]),e._v(" "),t("li",[e._v("Bad RAM(Both overclocks and mismatched RAM)\n"),t("ul",[t("li",[e._v("Even bad/mismatched timings can cause serious issues")])])]),e._v(" "),t("li",[e._v("Factory GPU Overclocks\n"),t("ul",[t("li",[e._v("OEMs commonly push a card a bit too far with their custom VBIOS")]),e._v(" "),t("li",[e._v("Generally these cards will have a physical switch, allowing you to choose a low power VBIOS")])])])]),e._v(" "),t("h2",{attrs:{id:"preparations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),t("p",[t("strong",[e._v("In macOS")]),e._v(":")]),e._v(" "),t("p",[e._v("Before we get in too deep, we'll want to first ready our system:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo pmset autopoweroff 0\nsudo pmset powernap 0\nsudo pmset standby 0\nsudo pmset proximitywake 0\nsudo pmset tcpkeepalive 0\n")])])]),t("p",[e._v("This will do 5 things for us:")]),e._v(" "),t("ol",[t("li",[e._v("Disables autopoweroff: This is a form of hibernation")]),e._v(" "),t("li",[e._v("Disables powernap: Used to periodically wake the machine for network, and updates(but not the display)")]),e._v(" "),t("li",[e._v("Disables standby: Used as a time period between sleep and going into hibernation")]),e._v(" "),t("li",[e._v("Disables wake from iPhone/Watch: Specifically when your iPhone or Apple Watch come near, the machine will wake")]),e._v(" "),t("li",[e._v("Disables TCP Keep Alive mechanism to prevent wake ups every 2 hours")])]),e._v(" "),t("p",[t("strong",[e._v("In your config.plist")]),e._v(":")]),e._v(" "),t("p",[e._v("While minimal changes are needed, here are the ones we care about:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Misc -> Boot -> HibernateMode -> None")]),e._v(" "),t("ul",[t("li",[e._v("We're gonna avoid the black magic that is S4 for this guide")])])]),e._v(" "),t("li",[t("code",[e._v("NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> boot-args")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("keepsyms=1")]),e._v(" - Makes sure that if a kernel panic does happen during sleep, that we get all the important bits from it")]),e._v(" "),t("li",[t("code",[e._v("swd_panic=1")]),e._v(" - Avoids issue where going to sleep results in a reboot, this should instead give us a kernel panic log")])])])]),e._v(" "),t("p",[t("strong",[e._v("In your BIOS")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Disable:\n"),t("ul",[t("li",[e._v("Wake on LAN")]),e._v(" "),t("li",[e._v("Trusted Platform Module\n"),t("ul",[t("li",[e._v("Note that if you're using BitLocker in Windows, disabling this will result in all your encryption keys being lost. If you're using BitLocker, either disable or note that it may be a cause for wake issues.")])])]),e._v(" "),t("li",[e._v("Wake on USB(Certain boards may actually require this on to wake, but most will get random wakeup calls with it)")])])]),e._v(" "),t("li",[e._v("Enable:\n"),t("ul",[t("li",[e._v("Wake on Bluetooth(If using a Bluetooth device for waking like a keyboard, otherwise you can disable)")])])])]),e._v(" "),t("h2",{attrs:{id:"main-culprits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-culprits"}},[e._v("#")]),e._v(" Main culprits")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#fixing-usb"}},[e._v("USB")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fixing-gpus"}},[e._v("GPUs")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fixing-thunderbolt"}},[e._v("Thunderbolt")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fixing-nics"}},[e._v("NICs")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fixing-nvme"}},[e._v("NVMe")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fixing-cpu-power-management"}},[e._v("CPU Power Management")])])]),e._v(" "),t("h3",{attrs:{id:"fixing-usb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-usb"}},[e._v("#")]),e._v(" Fixing USB")]),e._v(" "),t("p",[e._v("This is the #1 cause of sleep issues on hacks, mainly because Apple's drivers are quite bad at guessing ports and the port limit patches have the ill-effect of creating instability.")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/usb/"}},[e._v("USB Mapping")])],1)]),e._v(" "),t("p",[e._v("This guide also includes some other fixes than just mapping:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/usb/misc/power.html"}},[e._v("Fixing USB Power")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/usb/misc/shutdown.html"}},[e._v("Fixing Shutdown/Restart")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/usb/misc/instant-wake.html"}},[e._v("GPRW/UPRW/LANC Instant Wake Patch")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/usb/misc/keyboard.html"}},[e._v("Keyboard Wake Issues")])],1)]),e._v(" "),t("p",[t("strong",[e._v("USB maps with macOS Catalina(10.15) and newer")]),e._v(": You may find that even with USB mapping, your sleep breaks. one possible solution is renaming the IOClass value from "),t("code",[e._v("AppleUSBMergeNub")]),e._v(" to "),t("code",[e._v("AppleUSBHostMergeProperties")]),e._v(". See here for more info: "),t("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Changes in Catalina's USB IOClass"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("Note: Some USB devices that do not have proper drivers in macOS can unfortunately result in sleep issues. For example, Corsair water coolers with USB addressable control can prevent the machine from sleeping correctly. For these situations, we recommend users disconnect these troublesome devices when debugging sleep issues.")])]),e._v(" "),t("h3",{attrs:{id:"fixing-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-gpus"}},[e._v("#")]),e._v(" Fixing GPUs")]),e._v(" "),t("p",[e._v("With GPUs, it's fairly easy to know what might be causing issues. This being unsupported GPUs in macOS. By default, any GPU that doesn't have drivers already provided in the OS will run off very basic drivers known as VESA drivers. These provide minimal display output but also cause a big issue in that macOS doesn't actually know how to properly interact with these devices. To fix this, well need to either trick macOS into thinking it's a generic PCIe device(which it can better handle, ideal for desktops) or completely power off the card(on laptops, desktop dGPUs have issues powering down)")]),e._v(" "),t("ul",[t("li",[e._v("See here for more info:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Desktops/desktop-disable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disabling desktop dGPUs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Laptops/laptop-disable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disabling laptop dGPUs"),t("OutboundLink")],1)])])])]),e._v(" "),t("p",[e._v("Special notes for iGPU users on 10.15.4 and newer:")]),e._v(" "),t("ul",[t("li",[e._v("iGPU wake is partially broken due to numerous hacks apple uses in AppleGraphicsPowerManagement.kext with real Macs, to get around this you'll likely need "),t("code",[e._v("igfxonln=1")]),e._v(" to force all displays online. Obviously test first to make sure you have this issue.")]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id "),t("code",[e._v("07009B3E")]),e._v(" may fail for desktop Coffee Lake (UHD 630) users, you can try "),t("code",[e._v("00009B3E")]),e._v(" instead. "),t("code",[e._v("0300923E")]),e._v(" is also known to work sometimes.")])]),e._v(" "),t("p",[e._v("Other iGPU notes:")]),e._v(" "),t("ul",[t("li",[e._v("Some systems with iGPUs (e.g. Kaby Lake and Coffee Lake) may cause system instability in lower power states, and can sometimes manifest as NVMe kernel panics. To resolve, you can add "),t("code",[e._v("forceRenderStandby=0")]),e._v(" to your boot-args to disable RC6 Render Standby. See here for more info: "),t("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/1193",target:"_blank",rel:"noopener noreferrer"}},[e._v("IGP causes NVMe Kernel Panic CSTS=0xffffffff #1193"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Certain Ice Lake laptops may also kernel panic on "),t("code",[e._v("Cannot allow DC9 without disallowing DC6")]),e._v(" due to issues with transitioning states. A work around for this is using either "),t("code",[e._v("-noDC9")]),e._v(" or "),t("code",[e._v("-nodisplaysleepDC6")]),e._v(" in your boot-args")])]),e._v(" "),t("p",[e._v("Special note for 4k Displays with AMD dGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("Some displays may fail to wake randomly, mainly caused by AGDC preferences. To fix, apply this to your dGPU in DeviceProperties:\n"),t("ul",[t("li",[t("code",[e._v("CFG,CFG_USE_AGDC | Data | 00")])]),e._v(" "),t("li",[e._v("You can find the PciRoot of your GPU with "),t("a",{attrs:{href:"https://github.com/acidanthera/gfxutil/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("gfxutil"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[t("code",[e._v("/path/to/gfxutil -f GFX0")])])])])])])]),e._v(" "),t("p",[t("img",{attrs:{src:a(391),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"fixing-thunderbolt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-thunderbolt"}},[e._v("#")]),e._v(" Fixing Thunderbolt")]),e._v(" "),t("p",[e._v("Thunderbolt is a very tricky topic in the community, mainly due to the complexity of the situation. You really have just 2 paths to go down if you want Thunderbolt and sleep to work simultaneously:")]),e._v(" "),t("ul",[t("li",[e._v("Disable Thunderbolt 3 in the BIOS")]),e._v(" "),t("li",[e._v("Attempt to patch Thunderbolt 3:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://osy.gitbook.io/hac-mini-guide/details/thunderbolt-3-fix/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thunderbolt 3 Fix"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/osy86/ThunderboltReset",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThunderboltReset"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/al3xtjames/ThunderboltPkg/blob/master/Docs/FAQ.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThunderboltPkg"),t("OutboundLink")],1)])])])]),e._v(" "),t("p",[e._v("Note: Thunderbolt can be enabled without extra work "),t("em",[e._v("if")]),e._v(" you're ok without sleep, and vice versa.")]),e._v(" "),t("h3",{attrs:{id:"fixing-nics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-nics"}},[e._v("#")]),e._v(" Fixing NICs")]),e._v(" "),t("p",[e._v("NICs(network Interface Controllers) are fairly easy to fix with sleep, it's mainly the following:")]),e._v(" "),t("ul",[t("li",[e._v("Disable "),t("code",[e._v("WakeOnLAN")]),e._v(" in the BIOS\n"),t("ul",[t("li",[e._v("Most systems will enter a sleep/wake loop with this enabled")])])]),e._v(" "),t("li",[e._v("Disable "),t("code",[e._v("Wake for network access")]),e._v(" in macOS(SystemPreferences -> Power)\n"),t("ul",[t("li",[e._v("Seems to break on a lot of hacks")])])])]),e._v(" "),t("h3",{attrs:{id:"fixing-nvme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-nvme"}},[e._v("#")]),e._v(" Fixing NVMe")]),e._v(" "),t("p",[e._v("So macOS can be quite picky when it comes to NVMe drives, and there's also the issue that Apple's power management drivers are limited to Apple branded drives only. So the main things to do are:")]),e._v(" "),t("ul",[t("li",[e._v("Make sure the NVMe is on the latest firmware(especially important for "),t("a",{attrs:{href:"https://www.tonymacx86.com/threads/do-the-samsung-970-evo-plus-drives-work-new-firmware-available-2b2qexm7.270757/page-14#post-1960453",target:"_blank",rel:"noopener noreferrer"}},[e._v("970 Evo Plus drives"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix.kext"),t("OutboundLink")],1),e._v(" to allow for proper NVMe power management")])]),e._v(" "),t("p",[e._v("And avoid problematic drives, the main culprits:")]),e._v(" "),t("ul",[t("li",[e._v("Samsung's PM981 and PM991 SSDs")]),e._v(" "),t("li",[e._v("Micron's 2200S")])]),e._v(" "),t("p",[e._v("If you however do have these drives in your system, it's best to disable them via an SSDT: "),t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Desktops/desktop-disable.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disabling desktop dGPUs"),t("OutboundLink")],1),e._v(".\nThis guide is primarily for dGPU but works the exact same way with NVMe drives(as they're both just PCIe devices)")]),e._v(" "),t("h3",{attrs:{id:"fixing-cpu-power-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-cpu-power-management"}},[e._v("#")]),e._v(" Fixing CPU Power Management")]),e._v(" "),t("p",[t("strong",[e._v("For Intel")]),e._v(":")]),e._v(" "),t("p",[e._v("To verify you have working CPU Power Management, see the "),t("RouterLink",{attrs:{to:"/universal/pm.html"}},[e._v("Fixing Power Management")]),e._v(" page.")],1),e._v(" "),t("p",[e._v("Also note that incorrect power management data can result in wake issues, so verify that you're using the correct SMBIOS.")]),e._v(" "),t("p",[e._v("A common kernel panic from wake would be:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Sleep Wake failure in EFI\n")])])]),t("p",[t("strong",[e._v("For AMD")]),e._v(":")]),e._v(" "),t("p",[e._v("Fret not, for their is still hope for you as well! "),t("a",{attrs:{href:"https://github.com/trulyspinach/SMCAMDProcessor",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMDRyzenCPUPowerManagement.kext"),t("OutboundLink")],1),e._v(" can add power management to Ryzen based CPUs. Installation and usage is explained on the repo's README.md")]),e._v(" "),t("h2",{attrs:{id:"other-culprits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-culprits"}},[e._v("#")]),e._v(" Other Culprits")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#displays"}},[e._v("Displays")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#nvram"}},[e._v("NVRAM")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#rtc"}},[e._v("RTC")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#irq-conflicts"}},[e._v("IRQ Conflicts")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#audio"}},[e._v("Audio")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#smbus"}},[e._v("SMBus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#tsc"}},[e._v("TSC")])])]),e._v(" "),t("h3",{attrs:{id:"displays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#displays"}},[e._v("#")]),e._v(" Displays")]),e._v(" "),t("p",[e._v("So display issues are mainly for laptop lid detection, specifically:")]),e._v(" "),t("ul",[t("li",[e._v("Incorrectly made SSDT-PNLF")]),e._v(" "),t("li",[e._v("OS vs firmware lid wake")]),e._v(" "),t("li",[e._v("Keyboard spams from lid waking it(On PS2 based keyboards)")])]),e._v(" "),t("p",[e._v("The former is quite easy to fix, see here: "),t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backlight PNLF"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("For the middle, macOS's lid wake detection can bit a bit broken and you may need to outright disable it:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pmset lidwake "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),t("p",[e._v("And set "),t("code",[e._v("lidwake 1")]),e._v(" to re-enable it.")]),e._v(" "),t("p",[e._v("The latter requires a bit more work. What we'll be doing is trying to nullify semi random key spams that happen on Skylake and newer based HPs though pop up in other OEMs as well. This will also assume that your keyboard is PS2 based and are running "),t("a",{attrs:{href:"https://github.com/acidanthera/VoodooPS2/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooPS2"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To fix this, grab "),t("a",{attrs:{href:"https://github.com/acidanthera/VoodooPS2/blob/master/Docs/ACPI/SSDT-HP-FixLidSleep.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-HP-FixLidSleep.dsl"),t("OutboundLink")],1),e._v(" and adapt the ACPI pathing to your keyboard("),t("code",[e._v("_CID")]),e._v(" value being "),t("code",[e._v("PNP0303")]),e._v("). Once this is done, compile and drop into both EFI/OC/ACPI and under config.plist -> ACPI -> Add.")]),e._v(" "),t("p",[e._v("For 99% of HP users, this will fix the random key spam. If not, see below threads:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.tonymacx86.com/threads/guide-patching-dsdt-ssdt-for-laptop-backlight-control.152659/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RehabMan's brightness key guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"nvram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvram"}},[e._v("#")]),e._v(" NVRAM")]),e._v(" "),t("p",[e._v("To verify you have working NVRAM, see the "),t("RouterLink",{attrs:{to:"/misc/nvram.html"}},[e._v("Emulated NVRAM")]),e._v(" page to verify you have working NVRAM. And if not, then patch accordingly.")],1),e._v(" "),t("h3",{attrs:{id:"rtc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtc"}},[e._v("#")]),e._v(" RTC")]),e._v(" "),t("p",[e._v("This is mainly relevant for Intel 300 series motherboards(Z3xx), specifically that there's 2 issues:")]),e._v(" "),t("ul",[t("li",[e._v("Be default the RTC is disabled(instead using AWAC)")]),e._v(" "),t("li",[e._v("The RTC is usually not compatible with macOS")])]),e._v(" "),t("p",[e._v("To get around the first issue, see here: "),t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixing AWAC"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("For the second one, it's quite easy to tell you have RTC issues when you either shutdown or restart. Specifically you'll be greeted with a \"BIOS Restarted in Safemode\" error. To fix this, we'll need to prevent macOS from writing to the RTC regions causing these issues. There are a couple fixes:")]),e._v(" "),t("ul",[t("li",[e._v("DisableRtcChecksum: Prevent writing to primary checksum (0x58-0x59), works with most boards")]),e._v(" "),t("li",[t("code",[e._v("UEFI -> ProtoclOverride -> AppleRtcRam")]),e._v(" + "),t("code",[e._v("NVRAM -> Add -> rtc-blacklist")]),e._v(" "),t("ul",[t("li",[e._v("Blacklists certain regions at the firmware level, see "),t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration.pdf"),t("OutboundLink")],1),e._v(" for more info on how to set this up")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/RTCMemoryFixup",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMemoryFixup"),t("OutboundLink")],1),e._v(" + "),t("code",[e._v("rtcfx_exclude=")]),e._v(" "),t("ul",[t("li",[e._v("Blacklists certain regions at the kernel level, see README for more info on how to setup")])])])]),e._v(" "),t("p",[e._v("With some legacy boards, you may actually need to patch your RTC: "),t("a",{attrs:{href:"https://www.insanelymac.com/forum/topic/329624-need-cmos-reset-after-sleep-only-after-login/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z68 RTC"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"irq-conflicts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#irq-conflicts"}},[e._v("#")]),e._v(" IRQ Conflicts")]),e._v(" "),t("p",[e._v("IRQ issues usually occur during bootups but some may notice that IRQ calls can break with sleep, this fix is fairly easy:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("First dump your DSDT in Linux/Windows")]),e._v(" "),t("li",[e._v("then select "),t("code",[e._v("FixHPET")]),e._v(" option")])])])]),e._v(" "),t("p",[e._v("This will provide you with both SSDT-HPET.aml and "),t("code",[e._v("patches_OC.plist")]),e._v(", You will want to add the SSDT to EFI/OC/ACPI and add the ACPI patches into your config.plist from the patches_OC.plist")]),e._v(" "),t("h3",{attrs:{id:"audio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[e._v("#")]),e._v(" Audio")]),e._v(" "),t("p",[e._v("Unmanaged or incorrectly managed audio devices can also cause issues, either disable unused audio devices  in your BIOS or verify they're working correctly here:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/universal/audio.html"}},[e._v("Fixing Audio")])],1)]),e._v(" "),t("h3",{attrs:{id:"smbus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smbus"}},[e._v("#")]),e._v(" SMBus")]),e._v(" "),t("p",[e._v("Main reason you'd care about SMBus is AppleSMBus can help properly manage both SMBus and PCI devices like with power states. Problem is the kext usually won't load by itself, so you'll need to actually create the SSDT-SMBS-MCHC.")]),e._v(" "),t("p",[e._v("See here on more info on how to make it: "),t("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/smbus.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixing SMBus support"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"tsc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsc"}},[e._v("#")]),e._v(" TSC")]),e._v(" "),t("p",[e._v("The TSC(Time Stamp Counter) is responsible for making sure you're hardware is running at the correct speed, problem is some firmware(mainly HEDT/Server and Asus Laptops) will not write the TSC to all cores causing issues. To get around this, we have 3 options:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/lvs1974/CpuTscSync/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("CpuTscSync"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("For troublesome laptops")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://bitbucket.org/RehabMan/VoodooTSCSync/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooTSCSync"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("For most HEDT hardware")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/interferenc/TSCAdjustReset",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("For Skylake X/W/SP and Cascade Lake X/W/SP hardware")])])])]),e._v(" "),t("p",[e._v("The former 2 are plug n play, while the latter will need some customizations:")]),e._v(" "),t("ul",[t("li",[e._v("Open up the kext(ShowPackageContents in finder, "),t("code",[e._v("Contents -> Info.plist")]),e._v(") and change the Info.plist -> "),t("code",[e._v("IOKitPersonalities -> IOPropertyMatch -> IOCPUNumber")]),e._v(" to the number of CPU threads you have starting from "),t("code",[e._v("0")]),e._v("(i9 7980xe 18 core would be "),t("code",[e._v("35")]),e._v(" as it has 36 threads total)")]),e._v(" "),t("li",[e._v("Compiled version can be found here: "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/TSCAdjustReset.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset.kext"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:a(392),alt:""}})]),e._v(" "),t("p",[e._v("The most common way to see the TSC issue:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("Case 1")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("Case 2")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:a(393),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:a(394),alt:""}})])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);