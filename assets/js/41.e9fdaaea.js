(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{334:function(e,t,o){e.exports=o.p+"assets/img/cmos-error.d7acd2cd.png"},335:function(e,t,o){e.exports=o.p+"assets/img/rtc-blacklist.31a3b28e.png"},481:function(e,t,o){"use strict";o.r(t);var i=o(10),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fixing-rtc-write-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-rtc-write-issues"}},[e._v("#")]),e._v(" Fixing RTC write issues")]),e._v(" "),t("p",[e._v("What this section attempts to teach is how to resolve RTC(CMOS) issues on reboot/wake with certain machines. Most commonly looking like the image below:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(334),alt:"credit to u/iDrakus for the image"}})]),e._v(" "),t("p",[e._v("The reason that these CMOS and safe mode errors happen is due to AppleRTC writing to certain areas that are not supported by the hardware properly and thus resulting in panics and errors.")]),e._v(" "),t("p",[e._v("To get around this, we've commonly blocked out all RTC writes with "),t("a",{attrs:{href:"https://github.com/RehabMan/HP-ProBook-4x30s-DSDT-Patch/blob/master/config_parts/config_master.plist#L291L296",target:"_blank",rel:"noopener noreferrer"}},[e._v("these types of patches"),t("OutboundLink")],1),e._v(" but they're not ideal for many reasons including both breaking Windows and Linux and disabling potential supported regions like for power management.")]),e._v(" "),t("p",[e._v("So with OpenCore, we've got a few options to choose:")]),e._v(" "),t("ul",[t("li",[e._v("Patch AppleRTC from writing to specific regions\n"),t("ul",[t("li",[e._v("They may break in future OS updates")]),e._v(" "),t("li",[e._v("Much more difficult for the end user to patch")]),e._v(" "),t("li",[e._v("Does not handle EfiBoot writing to RTC")])])]),e._v(" "),t("li",[e._v("Omit bad regions from being writable\n"),t("ul",[t("li",[e._v("They may break in future firmware updates")]),e._v(" "),t("li",[e._v("Much easier for the end user to patch")]),e._v(" "),t("li",[e._v("Prevents EfiBoot from breaking your system as well")])])])]),e._v(" "),t("p",[e._v("The former is actually already integrated into OpenCore with the "),t("code",[e._v("DisableRtcChecksum")]),e._v(" quirk, but has the downfall of only blocking regions 0x58-0x59 and only working in the kernel level. Best way to know if this option is best, enable it and try. If this doesn't work, disable as it's an unnecessary patch.")]),e._v(" "),t("p",[e._v("With the latter, we're able to block very specific regions of our choice that match our exact model. And we're able to do this both in the kernel level and firmware aiding with hibernation support. This however will requires much more time and "),t("a",{attrs:{href:"https://github.com/acidanthera/RTCMemoryFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMemoryFixup"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"finding-our-bad-rtc-region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-our-bad-rtc-region"}},[e._v("#")]),e._v(" Finding our bad RTC region")]),e._v(" "),t("p",[e._v("For the rest of this guide, we're going to assume you've tested option 1("),t("code",[e._v("DisableRtcChecksum")]),e._v(") and it didn't work or you're having issues with EfiBoot also writing to RTC. To get started, we should first introduce a few ideas:")]),e._v(" "),t("ul",[t("li",[e._v("RTC will have regions spanning from 0 to 255")]),e._v(" "),t("li",[e._v("These regions will be in the hexadecimal counting system so in reality will be 0x00-0xFF")]),e._v(" "),t("li",[e._v("To omit bad regions, we use the boot-arg "),t("code",[e._v("rtcfx_exclude=00-FF")]),e._v(" "),t("ul",[t("li",[e._v("Replace "),t("code",[e._v("00-FF")]),e._v(" with your bad region (or regions)")]),e._v(" "),t("li",[e._v("Reminder that "),t("code",[e._v("boot-args")]),e._v(" is located under "),t("code",[e._v("NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82")]),e._v(" in your config.plist")]),e._v(" "),t("li",[e._v("This will also require you to have "),t("a",{attrs:{href:"https://github.com/acidanthera/RTCMemoryFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCMemoryFixup"),t("OutboundLink")],1),e._v(" in your config.plist and EFI/OC/Kexts folder.")])])]),e._v(" "),t("li",[e._v("There can be multiple bad regions")]),e._v(" "),t("li",[e._v("To find the bad region, we'll want to split out search into chunks")])]),e._v(" "),t("p",[e._v("Regarding splitting out chunks, what we'll be doing is omitting chunks of RTC regions until we've narrowed down far enough to the exact spot that's bad. You can see the below on how to start:")]),e._v(" "),t("h4",{attrs:{id:"_1-testing-rtcmemoryfixup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-testing-rtcmemoryfixup"}},[e._v("#")]),e._v(" 1. Testing RtcMemoryFixup")]),e._v(" "),t("ul",[t("li",[e._v("To start, you'll need to add "),t("code",[e._v("rtcfx_exclude=00-FF")]),e._v(" in boot-args. If after a reboot the RTC errors seems solved, this will tell you whether your CMOS errors are RTC related")])]),e._v(" "),t("h4",{attrs:{id:"_2-split-0x00-0xff-into-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-split-0x00-0xff-into-2"}},[e._v("#")]),e._v(" 2. Split 0x00-0xFF into 2")]),e._v(" "),t("ul",[t("li",[e._v("0x00-0x7F and 0x80-0xFF\n"),t("ul",[t("li",[e._v("write down the excluded range which fixes the RTC errors and proceed by splitting more into chunks")]),e._v(" "),t("li",[e._v("e.g. "),t("code",[e._v("rtcfx_exclude=00-7F")]),e._v("fixes the RTC errors so you're gonna split it by half and don't consider more "),t("code",[e._v("rtcfx_exclude=80-FF")])])])]),e._v(" "),t("li",[e._v("Test "),t("code",[e._v("rtcfx_exclude=00-7F")]),e._v(" and "),t("code",[e._v("rtcfx_exclude=80-FF")]),e._v(" "),t("ul",[t("li",[e._v("Note you may also get a bad range of 7F-80, or even bad regions split into multiple sections(ex. 0x00-0x01 "),t("strong",[e._v("and")]),e._v(" 0x80-0x81)")]),e._v(" "),t("li",[e._v("You can use "),t("code",[e._v("rtcfx_exclude=00-01,7F-80")]),e._v(" to resolve this")])])])]),e._v(" "),t("h4",{attrs:{id:"_3-after-testing-which-regions-is-bad-shrink-even-more"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-after-testing-which-regions-is-bad-shrink-even-more"}},[e._v("#")]),e._v(" 3. After testing which regions is bad, shrink even more")]),e._v(" "),t("ul",[t("li",[e._v("Assuming our bad region was within 0x80-0xFF, you'd next split that into 2:")]),e._v(" "),t("li",[e._v("0x80-0xBF and 0xC0-0xFF\n"),t("ul",[t("li",[e._v("if you had multiple ranges that are bad")])])])]),e._v(" "),t("h4",{attrs:{id:"_4-and-you-ll-continue-on-with-this-pattern-until-you-ve-narrowed-down-the-bad-region-note-that-you-will-need-to-reboot-each-time-to-test-if-you-re-still-getting-cmos-safe-mode-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-and-you-ll-continue-on-with-this-pattern-until-you-ve-narrowed-down-the-bad-region-note-that-you-will-need-to-reboot-each-time-to-test-if-you-re-still-getting-cmos-safe-mode-errors"}},[e._v("#")]),e._v(" 4. And you'll continue on with this pattern until you've narrowed down the bad region. Note that you will need to reboot each time to test if you're still getting CMOS/Safe-mode errors")]),e._v(" "),t("ul",[t("li",[e._v("Also note that the final bad spot will usually be a range and not a singular spot.")]),e._v(" "),t("li",[e._v("ie. "),t("code",[e._v("rtcfx_exclude=85-86")]),e._v(" instead of one singular value")])]),e._v(" "),t("p",[t("strong",[e._v("Pro tip")]),e._v(": To find a value in between 2 regions, I recommend first converting from hexadecimal to decimal, then run the below equation:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("(x + y) / 2")])])]),e._v(" "),t("p",[e._v("Now lets try to use this with step 1 from earlier:")]),e._v(" "),t("ul",[t("li",[e._v("0x00-0xFF -> 0-255 -> "),t("code",[e._v("(0 + 255) / 2")]),e._v(" = 127.5")])]),e._v(" "),t("p",[e._v("Now with 127.5, you'll round up and down to get yourselves an end and a start value:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("0-127 -> 0x00-0x7F")])]),e._v(" "),t("li",[t("p",[e._v("128-255 -> 0x80-0xFF")])])]),e._v(" "),t("p",[e._v("And hopefully this can help better understand how you got our values from step 1.")]),e._v(" "),t("h2",{attrs:{id:"making-the-blacklist-more-permanent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-the-blacklist-more-permanent"}},[e._v("#")]),e._v(" Making the blacklist more permanent")]),e._v(" "),t("p",[e._v("Once you've found the bad RTC region, you can now finally add it to OpenCore itself and allow this region to also be blacklisted at the firmware level.")]),e._v(" "),t("p",[e._v("For this, open up your config.plist and head to the "),t("code",[e._v("NVRAM -> Add")]),e._v(" section. Here under the "),t("code",[e._v("4D1FDA02-38C7-4A6A-9CC6-4BCCA8B30102")]),e._v(" GUID, you'll want to add a new entry called "),t("code",[e._v("rtc-blacklist")])]),e._v(" "),t("p",[e._v("Next you'll want to add our bad RTC region as an array, so "),t("code",[e._v("rtcfx_exclude=85-86")]),e._v(" will become "),t("code",[e._v("rtc-blacklist | Data | 8586")]),e._v(". This will also work with longer ranges such as 85-89 and such however with "),t("code",[e._v("rtc-blacklist")]),e._v(" you must include every entry(ie. "),t("code",[e._v("<85 86 87 88 89>")]),e._v("). Remember to remove the boot-arg once you're set "),t("code",[e._v("rtc-blacklist")])]),e._v(" "),t("p",[e._v("Next ensure you have "),t("code",[e._v("NVRAM -> Delete")]),e._v(" also set as NVRAM variables will not be overwritten by OpenCore unless explicitly told so.")]),e._v(" "),t("p",[e._v("Once all this is done, you should have something similar to below:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(335),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);