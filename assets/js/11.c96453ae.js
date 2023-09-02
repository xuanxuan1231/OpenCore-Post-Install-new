(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{420:function(t,e,a){t.exports=a.p+"assets/img/initial-boot.6a3eae3f.png"},421:function(t,e,a){t.exports=a.p+"assets/img/front-io-plugged.7e34db4c.png"},422:function(t,e,a){t.exports=a.p+"assets/img/usb-c-test.6e512b44.png"},423:function(t,e,a){t.exports=a.p+"assets/img/usb-a-test-3.8ad1d384.png"},424:function(t,e,a){t.exports=a.p+"assets/img/usb-a-test-4.a06acca3.png"},425:function(t,e,a){t.exports=a.p+"assets/img/usb-a-test-2.0d237546.png"},426:function(t,e,a){t.exports=a.p+"assets/img/location-id.0e09ce14.png"},427:function(t,e,a){t.exports=a.p+"assets/img/front-io-diagram.6debd359.png"},428:function(t,e,a){t.exports=a.p+"assets/img/full-diagram-port.95a0acd7.png"},429:function(t,e,a){t.exports=a.p+"assets/img/usb-c-test-2.ac6df531.png"},430:function(t,e,a){t.exports=a.p+"assets/img/full-diagram.df6685c2.png"},431:function(t,e,a){t.exports=a.p+"assets/img/bluetooth.cb166ecb.png"},432:function(t,e,a){t.exports=a.p+"assets/img/usr.f0bf7e0c.png"},433:function(t,e,a){t.exports=a.p+"assets/img/ssdt-rhub-normal.ae4515de.png"},434:function(t,e,a){t.exports=a.p+"assets/img/ssdt-rhub.c870313a.png"},435:function(t,e,a){t.exports=a.p+"assets/img/ssdt-rhub-fixed.c60433a7.png"},436:function(t,e,a){t.exports=a.p+"assets/img/ssdt-save.7aca1f0e.png"},437:function(t,e,a){t.exports=a.p+"assets/img/show-contents.6e2ee797.png"},438:function(t,e,a){t.exports=a.p+"assets/img/info-plist.4270a49f.png"},439:function(t,e,a){t.exports=a.p+"assets/img/info-plist-open.878e50dc.png"},440:function(t,e,a){t.exports=a.p+"assets/img/rp05-entry.d5f3ffba.png"},441:function(t,e,a){t.exports=a.p+"assets/img/iopath-match.94411b7c.png"},442:function(t,e,a){t.exports=a.p+"assets/img/ioproviderclass.106aee58.png"},443:function(t,e,a){t.exports=a.p+"assets/img/iorpoviderclass-plist.1849a764.png"},444:function(t,e,a){t.exports=a.p+"assets/img/smbios.dd36131c.png"},445:function(t,e,a){t.exports=a.p+"assets/img/smbios-plist.bb87baef.png"},446:function(t,e,a){t.exports=a.p+"assets/img/ioprovidermerge.23b33fb1.png"},447:function(t,e,a){t.exports=a.p+"assets/img/name.abed48f7.png"},448:function(t,e,a){t.exports=a.p+"assets/img/port.fe3f2983.png"},449:function(t,e,a){t.exports=a.p+"assets/img/port-plist.5263aa29.png"},450:function(t,e,a){t.exports=a.p+"assets/img/port-count.c2ba2fe1.png"},451:function(t,e,a){t.exports=a.p+"assets/img/finished.c7d11f9e.png"},502:function(t,e,a){"use strict";a.r(e);var o=a(10),i=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"usb-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-mapping"}},[t._v("#")]),t._v(" USB Mapping")]),t._v(" "),e("p",[t._v("So with the prerequisites out of the way, we can finally get to the meat of this guide. And now we get to finally read one of my favorite books before I go to bed each night: "),e("a",{attrs:{href:"https://uefi.org/specs/ACPI/6.4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Advanced Configuration and Power Interface (ACPI) Specification!"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Now if you haven't read through this before(which I highly recommend you do, it's a thrilling tale), I'll point you to the meat of the USB situation:")]),t._v(" "),e("ul",[e("li",[t._v("Section 9.14: _UPC (USB Port Capabilities)")])]),t._v(" "),e("p",[t._v("Here we're greeted with all the possible USB ports in ACPI:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Info")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("USB 2.0 Type-A connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This is what macOS will default all ports to when no map is present")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("USB 3.0 Type-A connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3.0, 3.1 and 3.2 ports share the same Type")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0-only")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Mainly seen in phones")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 with Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does not")]),t._v(" change the ACPI port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 without Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does")]),t._v(" change the ACPI port. generally seen on 3.1/2 motherboard headers")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("255")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Proprietary connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For Internal USB ports like Bluetooth")])])])]),t._v(" "),e("h2",{attrs:{id:"usb-mapping-the-manual-way"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-mapping-the-manual-way"}},[t._v("#")]),t._v(" USB Mapping: The manual way")]),t._v(" "),e("p",[t._v("This section is for those who want to get down into the meats of their hackintosh, to really understand what it's doing and help if there's any issues with USBmap.py and other mapping tools. To start, we'll need a few things:")]),t._v(" "),e("ul",[e("li",[t._v("Installed version of macOS\n"),e("ul",[e("li",[t._v("This is due to how macOS enumerates ports, trying to map from other OSes makes this difficult")]),t._v(" "),e("li",[t._v("Note: This guide will be focusing on OS X 10.11, El Capitan and newer. Older OSes shouldn't require any USB mapping")])])]),t._v(" "),e("li",[t._v("Non-conflicting USB names\n"),e("ul",[e("li",[t._v("See previous section: "),e("RouterLink",{attrs:{to:"/usb/system-preparation.html#checking-what-renames-you-need"}},[t._v("Checking what renames you need")])],1)])]),t._v(" "),e("li",[t._v("A USB 2.0 and USB 3.0 device to test with\n"),e("ul",[e("li",[t._v("You must have 2 separate devices as to ensure no mix ups with personalities")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-302.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("IORegistryExplorer.app"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("To view the inner workings of macOS more easily")]),t._v(" "),e("li",[t._v("If you plan to use Discord for troubleshooting, "),e("a",{attrs:{href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-210.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2.1.0"),e("OutboundLink")],1),t._v(" is a bit easier on file size.")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-usb-inject-all/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("USBInjectAll"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("This is only required for older USB controllers like Broadwell and older, however some Coffee Lake systems may still require it")]),t._v(" "),e("li",[e("strong",[t._v("Reminder")]),t._v(" this kext does not work on AMD")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/Sample-USB-Map.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample-USB-Map.kext"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/corpnewt/ProperTree",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProperTree"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Or any other plist editor")])])])]),t._v(" "),e("p",[t._v("Now with all this out of the way, lets get to USB mapping!")]),t._v(" "),e("h2",{attrs:{id:"finding-your-usb-ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-your-usb-ports"}},[t._v("#")]),t._v(" Finding your USB ports")]),t._v(" "),e("p",[t._v("Lets open our previously downloaded "),e("a",{attrs:{href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-302.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("IORegistryExplorer.app"),e("OutboundLink")],1),t._v(" and search for our USB controller(s).")]),t._v(" "),e("p",[t._v("The 2 main search terms are "),e("code",[t._v("XHC")]),t._v(" and "),e("code",[t._v("EHC")]),t._v(", but if you have a legacy board with UHCI or OHCI controllers you'll need to adjust. A blanket "),e("code",[t._v("USB")]),t._v(" search may show too many entries and confuse you.")]),t._v(" "),e("p",[t._v("For this example, lets try and map an Asus X299-E Strix board:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(420),alt:""}})]),t._v(" "),e("p",[t._v("From the above image we can see 3 USB controllers:")]),t._v(" "),e("ul",[e("li",[t._v("PXSX(1, Top)")]),t._v(" "),e("li",[t._v("PXSX(2, Middle)")]),t._v(" "),e("li",[t._v("XHCI(3, Bottom)")])]),t._v(" "),e("p",[t._v("Pay attention that they're individual controllers, as this means "),e("strong",[t._v("each USB controller has it's own port limit")]),t._v(". So you're not as starved for USB ports as you may think.")]),t._v(" "),e("p",[t._v("Now I personally know which USB controllers match up with which physical ports, problem is it's not always as obvious which ports match with which controllers. So lets try to figure out which is what.")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": The AppleUSBLegacyRoot entry is an entry that lists all active USB controllers and ports, these are not USB controllers themselves so you can outright ignore them.")]),t._v(" "),e("p",[e("strong",[t._v("Note 2")]),t._v(": Keep in mind every motherboard model will have a unique set of port combos, controller types and names. So while our example uses PXSX, yours might have the XHC0 or PTCP name. And quite common on older motherboards is that you may only have 1 controller, this is alright so don't stress about having the exact same setup as the example.")]),t._v(" "),e("p",[t._v("Common names you can check:")]),t._v(" "),e("ul",[e("li",[t._v("USB 3.x controllers:\n"),e("ul",[e("li",[t._v("XHC")]),t._v(" "),e("li",[t._v("XHC0")]),t._v(" "),e("li",[t._v("XHC1")]),t._v(" "),e("li",[t._v("XHC2")]),t._v(" "),e("li",[t._v("XHCI")]),t._v(" "),e("li",[t._v("XHCX")]),t._v(" "),e("li",[t._v("AS43")]),t._v(" "),e("li",[t._v("PTXH\n"),e("ul",[e("li",[t._v("Commonly associated with AMD Chipset controllers")])])]),t._v(" "),e("li",[t._v("PTCP\n"),e("ul",[e("li",[t._v("Found on AsRock X399")])])]),t._v(" "),e("li",[t._v("PXSX\n"),e("ul",[e("li",[t._v("This is a generic PCIe device, "),e("strong",[t._v("double check it's a USB device")]),t._v(" as NVMe controllers and other devices can use the same name.")])])])])]),t._v(" "),e("li",[t._v("USB 2.x controllers:\n"),e("ul",[e("li",[t._v("EHCI")]),t._v(" "),e("li",[t._v("EHC1")]),t._v(" "),e("li",[t._v("EHC2")]),t._v(" "),e("li",[t._v("EUSB")]),t._v(" "),e("li",[t._v("USBE")])])])]),t._v(" "),e("h3",{attrs:{id:"finding-which-ports-match-with-which-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-which-ports-match-with-which-controller"}},[t._v("#")]),t._v(" Finding which ports match with which controller")]),t._v(" "),e("p",[t._v("To start, I'm going to plug a USB device into my front USB 3.1(Type-A) and 3.2(Type-C):")]),t._v(" "),e("p",[e("img",{attrs:{src:a(421),alt:""}})]),t._v(" "),e("p",[t._v("Next lets look at IOReg, and we can see where our USB devices fell:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("USB-C")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("USB-A")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(422),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(423),alt:""}})])])])]),t._v(" "),e("p",[t._v("Here we see a few things:")]),t._v(" "),e("ul",[e("li",[t._v("Front 3.2 Type-C is on the PXSX(2, middle) Controller")]),t._v(" "),e("li",[t._v("Front 3.1 Type-A is on the XHCI(3, Bottom) Controller")])]),t._v(" "),e("p",[t._v("Now that we have an idea of which ports go to which controller, can can now look into how we USB map.")]),t._v(" "),e("h3",{attrs:{id:"usb-a-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-a-mapping"}},[t._v("#")]),t._v(" USB-A mapping")]),t._v(" "),e("p",[t._v("As mentioned before, USB 3.x ports are split into 2 personalities: USB 2.0 and USB 3.0. This is to ensure backwards compatibility but macOS itself has difficulties determining which personalities match up to which ports. That's where we come in to help.")]),t._v(" "),e("p",[t._v("So lets take our USB-A port, when we plug in a USB 3.0 device into it we see "),e("code",[t._v("XHCI -> SS03")]),t._v(" light up. This is the USB 3.0 personality of the port. Now we'll want to plug a USB 2.0 device into that port:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("3.0 Personality")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("2.0 Personality")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(424),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(425),alt:""}})])])])]),t._v(" "),e("p",[t._v("We see that the USB 2.0 personality of our 3.0 port is "),e("code",[t._v("XHCI -> HS03")]),t._v(", now you should be able to get an idea of what we're trying to do:")]),t._v(" "),e("ul",[e("li",[t._v("Front Type-A:\n"),e("ul",[e("li",[t._v("HS03: 2.0 Personality")]),t._v(" "),e("li",[t._v("SS03: 3.0 Personality")])])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": If your USB ports show up as either AppleUSB20XHCIPort or AppleUSB30XHCIPort, you can still map however it will be a bit more difficult. Instead of writing down the names, pay very close attention to the "),e("code",[t._v("port")]),t._v(" property on the right hand side:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(426),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"creating-a-personal-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-personal-map"}},[t._v("#")]),t._v(" Creating a personal map")]),t._v(" "),e("p",[t._v("This is where we pull out pen and paper, and start to write down which ports physically match up with which digital ports. An example of what your map can look like:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name Mapping")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Property Mapping")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(427),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(428),alt:""}})])])])]),t._v(" "),e("p",[t._v("Your own map doesn't need to look exactly like this, however you'll want something that you can easily understand and refer to down the line.")]),t._v(" "),e("p",[t._v("Note:")]),t._v(" "),e("ul",[e("li",[t._v("Name Mapping: When a proper name shows up in IOReg(ie. HS01)")]),t._v(" "),e("li",[t._v("Property Mapping: When no proper name is given(ie. AppleUSB30XHCIPort)")])]),t._v(" "),e("h3",{attrs:{id:"usb-c-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-c-mapping"}},[t._v("#")]),t._v(" USB-C mapping")]),t._v(" "),e("p",[t._v("Next lets map our USB-C port, this is where it gets quite tricky as you may have noticed earlier:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Info")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0-only")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Mainly seen in phones")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 with Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does not")]),t._v(" change the ACPI port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 without Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does")]),t._v(" change the ACPI port. generally seen on 3.1/2 motherboard headers")])])])]),t._v(" "),e("p",[t._v("So when we map our USB-C header, we notice it occupies the SS01 port. But when we flip it, we actually populate it on the SS02 port. When this happens, you'll want to write this down for when we apply the port type.")]),t._v(" "),e("ul",[e("li",[t._v("Note: All personalities from this port will be put under the Type 10")]),t._v(" "),e("li",[t._v("Note 2: Not all USB-C headers will be Type 10, "),e("strong",[t._v("double check yours")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(429),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"continuing-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#continuing-mapping"}},[t._v("#")]),t._v(" Continuing mapping")]),t._v(" "),e("p",[t._v("Now that you have the basic idea, you'll want to go around with every USB port and map it out. This will take time, and don't forget to write it down. Your final diagram should look similar to this:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(430),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"special-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#special-notes"}},[t._v("#")]),t._v(" Special Notes")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#bluetooth"}},[t._v("Bluetooth")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#usrx-ports"}},[t._v("USRx Ports")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#missing-usb-ports"}},[t._v("Missing USB Ports")])])]),t._v(" "),e("h4",{attrs:{id:"bluetooth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bluetooth"}},[t._v("#")]),t._v(" Bluetooth")]),t._v(" "),e("p",[t._v("So while not obvious to many, Bluetooth actually runs over the USB interface internally. This means that when mapping, you'll need to pay close attention to devices that already show up in IOReg:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(431),alt:""}})]),t._v(" "),e("p",[t._v("Keep this in mind, as this plays into the Type 255 and getting certain services like handoff working correctly.")]),t._v(" "),e("h4",{attrs:{id:"usrx-ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usrx-ports"}},[t._v("#")]),t._v(" USRx Ports")]),t._v(" "),e("p",[t._v('When mapping, you may notice some extra ports left over, specifically USR1 and USR2. These ports are known as "USBR" ports, or more specifically '),e("a",{attrs:{href:"https://software.Intel.com/content/www/us/en/develop/documentation/amt-developer-guide/top/storage-redirection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB Redirection Ports"),e("OutboundLink")],1),t._v(". Use of these is for remote management but real Macs don't ship with USBR devices and so has no support for them OS-wise. You can actually ignore these entries in your USB map:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(432),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"missing-usb-ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#missing-usb-ports"}},[t._v("#")]),t._v(" Missing USB ports")]),t._v(" "),e("p",[t._v("In some rare situations, certain USB ports may not show up in macOS at all. This is likely due to a missing definition in your ACPI tables, and so we have a few options:")]),t._v(" "),e("ul",[e("li",[t._v("Coffee Lake and older should use "),e("a",{attrs:{href:"https://github.com/Sniki/OS-X-USB-Inject-All/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("USBInjectAll"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Don't forget to add this to both EFI/OC/Kexts and you config.plist's kernel -> Add")])])]),t._v(" "),e("li",[t._v("Comet Lake and newer should use SSDT-RHUB")]),t._v(" "),e("li",[t._v("AMD systems should also use SSDT-RHUB")])]),t._v(" "),e("p",[t._v("SSDT-RHUB's purpose is to reset your USB controller, and force macOS to reenumerate them. This avoids the hassle of trying to patch your existing ACPI tables.")]),t._v(" "),e("p",[t._v("To create your own SSDT-RHUB-MAP:")]),t._v(" "),e("ul",[e("li",[t._v("Grab a copy of the SSDT: "),e("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-RHUB.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RHUB.dsl"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Grab "),e("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases/tag/1.5.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("maciASL"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Next, open our newly downloaded SSDT with maciASL, you should be presented with the following:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(433),alt:""}})]),t._v(" "),e("p",[t._v("Now, open IOReg and find the USB controller you want to reset(pay very close attention its the USB controller and not the child RHUB with the same name):")]),t._v(" "),e("p",[t._v("If you look to the right side, you should see the "),e("code",[t._v("acpi-apth")]),t._v(" property. Here we're going to need to translate it to something our SSDT can use:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# before modifying")]),t._v("\nIOService:/AppleACPIPlatformExpert/PC00@0/AppleACPIPCI/RP05@1C,4/IOPP/PXSX@0\n")])])]),e("p",[t._v("Now we'll want to strip out any unnecessary data:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("IOService:/AppleACPIPlatformExpert/")])]),t._v(" "),e("li",[e("code",[t._v("@##")])]),t._v(" "),e("li",[e("code",[t._v("IOPP")])])]),t._v(" "),e("p",[t._v("Once cleaned up, yours should look similar:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# After modifying")]),t._v("\nPC00.RP05.PXSX\n")])])]),e("p",[t._v("Following the example from above, we'll be renaming "),e("code",[t._v("PCI0.XHC1.RHUB")]),t._v(" to "),e("code",[t._v("PC00.RP05.PXSX.RHUB")]),t._v(":")]),t._v(" "),e("p",[e("strong",[t._v("Before")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("External (_SB_.PCI0.XHC1.RHUB, DeviceObj) <- Rename this\n\nScope (_SB.PCI0.XHC1.RHUB) <- Rename this\n")])])]),e("p",[e("img",{attrs:{src:a(434),alt:""}})]),t._v(" "),e("p",[t._v("Following the example pathing we found, the SSDT should look something like this:")]),t._v(" "),e("p",[e("strong",[t._v("After")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("External (_SB.PC00.RP05.PXSX.RHUB, DeviceObj) <- Renamed\n\nScope (_SB.PC00.RP05.PXSX.RHUB) <- Renamed\n")])])]),e("p",[e("img",{attrs:{src:a(435),alt:""}})]),t._v(" "),e("p",[t._v("Once you've edited the SSDT to your USB controller's path, you can export it with "),e("code",[t._v("File -> SaveAs -> ACPI Machine Language Binary")]),t._v(":")]),t._v(" "),e("p",[e("img",{attrs:{src:a(436),alt:""}})]),t._v(" "),e("p",[t._v("Finally, remember to add this SSDT to both EFI/OC/ACPI and your config.plist under ACPI -> Add.")]),t._v(" "),e("h2",{attrs:{id:"creating-our-kext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-our-kext"}},[t._v("#")]),t._v(" Creating our kext")]),t._v(" "),e("p",[t._v("Its the time you've all been waiting for, we finally get to create our USB map!")]),t._v(" "),e("p",[t._v("First off, we'll want to grab a sample USB map kext:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/Sample-USB-Map.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample-USB-Map.kext"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Next right click the .kext, and select "),e("code",[t._v("Show Package Contents")]),t._v(". then drill down to the info.plist:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Show Contents")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("info.plist")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(437),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(438),alt:""}})])])])]),t._v(" "),e("p",[t._v("Now lets open ProperTree and look at this info.plist:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(439),alt:""}})]),t._v(" "),e("p",[t._v("Here we see a few sections, under "),e("code",[t._v("IOKitPersonalities")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("RP05 - PXSX(1)")]),t._v(" "),e("li",[t._v("RP07 - PXSX(2)")]),t._v(" "),e("li",[t._v("XHCI - XHCI")])]),t._v(" "),e("p",[t._v("Each entry here represents a USB controller, specifically the map for each controller. The names of the entry don't matter much however, it's more for book keeping so you know which entry to has which USB map.")]),t._v(" "),e("p",[t._v("Next lets head into the "),e("code",[t._v("RP05 - PXSX(1)")]),t._v(" entry:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(440),alt:""}})]),t._v(" "),e("p",[t._v("Here we see a few more important properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Comment")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IOPathMatch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The device macOS will choose to attach the map to")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IOProviderClass")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The USB driver macOS will choose to attach")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The SMBIOS the USB map attaches too")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IOProviderMergeProperties")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The dictionary holding the actual port map")])])])]),t._v(" "),e("h3",{attrs:{id:"determining-the-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#determining-the-properties"}},[t._v("#")]),t._v(" Determining the properties")]),t._v(" "),e("p",[t._v("Determining the value for each property is actually quite straight forward:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#iopathmatch"}},[t._v("IOPathMatch")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#ioproviderclass"}},[t._v("IOProviderClass")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#model"}},[t._v("model")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#ioprovidermergeproperties"}},[t._v("IOProviderMergeProperties")])])]),t._v(" "),e("h4",{attrs:{id:"iopathmatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iopathmatch"}},[t._v("#")]),t._v(" IOPathMatch")]),t._v(" "),e("p",[t._v("Finding IOPathMatch is super easy, first find the USB controller you want to map and then select the Root HUB(so the PXSX child with the same name as the parent, don't worry it's less confusing when you look at the image):")]),t._v(" "),e("p",[e("img",{attrs:{src:a(441),alt:""}})]),t._v(" "),e("p",[t._v("Now with the PXSX entry selected, simply copy(Cmd+C) and paste it into our info.plist. Your property should look similar to the below:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IOService:/AppleACPIPlatformExpert/PC00@0/AppleACPIPCI/RP05@1C,4/IOPP/PXSX@0/PXSX@01000000\n")])])]),e("p",[e("strong",[t._v("Note")]),t._v(": Each USB Controller will have a unique IOPathMatch value, keep this in mind if you have multiple controllers of the same name. This Asus X299 board has 2 PXSX USB controllers, so each new USB map dictionary will have a unique entry for IOPathMatch.")]),t._v(" "),e("h4",{attrs:{id:"ioproviderclass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ioproviderclass"}},[t._v("#")]),t._v(" IOProviderClass")]),t._v(" "),e("p",[t._v("Finding IOProviderClass is also easy, select the Root-hub once again and look for the CFBundleIdentifier value:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("IOReg")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("info.plist")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(442),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(443),alt:""}})])])])]),t._v(" "),e("p",[t._v("Now we can't take that value 1-1, instead we need to trim it to the Kext's short name being "),e("code",[t._v("AppleUSBXHCIPCI")]),t._v("(So we removed "),e("code",[t._v("com.apple.driver.usb.")]),t._v(")")]),t._v(" "),e("h4",{attrs:{id:"model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" model")]),t._v(" "),e("p",[t._v("If you've forgotten what SMBIOS you're using, you can simply check the top level device in IOReg:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("IOReg")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("info.plist")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(444),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(445),alt:""}})])])])]),t._v(" "),e("h3",{attrs:{id:"ioprovidermergeproperties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ioprovidermergeproperties"}},[t._v("#")]),t._v(" IOProviderMergeProperties")]),t._v(" "),e("p",[t._v("Now lets open the IOProviderMergeProperties dictionary:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(446),alt:""}})]),t._v(" "),e("p",[t._v("Here we have a lot of data to work through:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Comment")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the USB port's dictionary")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("port-count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This is the largest port value you're injecting")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("UsbConnector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This is the type of USB port as mentioned in the ACPI 9.14 section")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("port")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The physical location of your USB port in ACPI")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Comment")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An optional entry to help you keep track of all your ports")])])])]),t._v(" "),e("p",[t._v("And a reminder of all possible port types:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Info")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("USB 2.0 Type-A connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This is what macOS will default all ports to when no map is present")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("USB 3.0 Type-A connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3.0, 3.1 and 3.2 ports share the same Type")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0-only")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Mainly seen in phones")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 with Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does not")]),t._v(" change the ACPI port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 without Switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),e("strong",[t._v("does")]),t._v(" change the ACPI port. generally seen on 3.1/2 motherboard headers")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("255")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Proprietary connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("For Internal USB ports like Bluetooth")])])])]),t._v(" "),e("p",[t._v("It should be coming full circle now, as you can see how our previous work with mapping out our ports works.")]),t._v(" "),e("h4",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),e("p",[t._v("The name property is actually the name of the USB port's dictionary, and is used solely for house keeping. Keep in mind every USB port you want to use needs to have its own unique USB port dictionary.")]),t._v(" "),e("p",[t._v("The name itself holds no value besides showing up in IOReg and so this can be whatever you like. To keep this sane, we use the name already given by our ACPI tables(in this case HS01) but the name can be any 4 character entry. However do not go over this 4 char limit, as unintended side effects can happen.")]),t._v(" "),e("ul",[e("li",[t._v("Note: Those with AppleUSB20XHCIPort or AppleUSB30XHCIPort names for USB ports, you should choose a name easy to identify. On Intel, this is HSxx for 2.0 personalities and SSxx for 3.0 personalities")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(447),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),e("p",[t._v("To find the "),e("code",[t._v("port")]),t._v(" value, simply select your USB port in IOReg and look for the "),e("code",[t._v("port")]),t._v(" entry:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("IOReg")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("info.plist")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(448),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(449),alt:""}})])])])]),t._v(" "),e("p",[t._v("From here we get "),e("code",[t._v("<03 00 00 00>")]),t._v(", you can simply remove any spaces and add it to your USB map")]),t._v(" "),e("h4",{attrs:{id:"port-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port-count"}},[t._v("#")]),t._v(" port-count")]),t._v(" "),e("p",[t._v("The final value remaining, look back at your USB map and see which "),e("code",[t._v("port")]),t._v(" entry is the largest:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(450),alt:""}})]),t._v(" "),e("p",[t._v("Here we see the largest in PXSX(1) is "),e("code",[t._v("<04000000>")]),t._v(", do keep in mind that "),e("code",[t._v("port")]),t._v(" uses hexadecimal if you get any letters in your USB map.")]),t._v(" "),e("h3",{attrs:{id:"continuing-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#continuing-on"}},[t._v("#")]),t._v(" Continuing on")]),t._v(" "),e("p",[t._v("Now that we've gone over how to map your USB ports for a specific controller, you should have enough understanding to map more controllers. The sample USB-Map.kext I provided has 3 USB controllers listed in it(PXSX-1, PXSX-2 and XHCI). Remember to edit accordingly and to remove any unnecessary maps.")]),t._v(" "),e("h2",{attrs:{id:"cleaning-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-up"}},[t._v("#")]),t._v(" Cleaning up")]),t._v(" "),e("p",[t._v("Once your saved your USB map's info.plist, remember to add the kext to both your EFI/OC/Kexts and under you config.plist's Kernel -> Add(ProperTree's snapshot can do this for you)")]),t._v(" "),e("p",[t._v("Next, remove/disable:")]),t._v(" "),e("ul",[e("li",[t._v("USBInjectAll.kext(if you're using it)\n"),e("ul",[e("li",[t._v("Reason for this is USBInjectAll actually breaks how Apple builds port maps. So while it's great for initial port mapping, it can break you final USB map")])])]),t._v(" "),e("li",[t._v("Kernel -> Quirks -> XhciPortLimit -> False\n"),e("ul",[e("li",[t._v("Now that we're finally under the 15 port limit, we no longer need this hacky fix")])])])]),t._v(" "),e("p",[t._v("Then reboot, and check IOReg one last time:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(451),alt:""}})]),t._v(" "),e("p",[t._v("Voila! As you can see, our USB map applied successfully!")]),t._v(" "),e("p",[t._v("The main properties to verify are:")]),t._v(" "),e("ul",[e("li",[t._v("Correct UsbConnector property on your USB ports")]),t._v(" "),e("li",[t._v("Comment applied(if injected)")]),t._v(" "),e("li",[t._v("Unused ports were removed")])])])}),[],!1,null,null,null);e.default=i.exports}}]);