---
model: post
title: Fix HP Spectre 13 not going to sleep mode.
description: How to fix HP Spectre 13 (v001nf) not going to sleep/hibernate mode on Linux.
author: Pierre Le Guen
path: fix-hp-spectre-13-sleep
image: ../images/fix-hp-spectre.jpg
date: 2019-10-05T18:14:00.377Z
published: true
tags:
  - Fix
  - Linux
---
# The problem

After switching from Windows to Linux I faced a problem with my HP Spectre when I close the lid the laptop doesn't go in sleep mode.

I looked for a workaround on the web without success.

# Fixing the issue

The way to fix this is by browsing the /proc/acpi/wakeup file. This way you can find what wake up the laptop from suspend.

It appears that the power button is the issue here. One thing to know here is that the /proc/acpi/wakeup file can't be edited directly. To achieve what we want, we need to create a service that will change the value for us.

## The script

Let's create the service that will start a bash script for us at startup.

* Create the file, e.g:`$ touch suspendfix_pwrb.service`
* Edit the file with the following service :

```bash
[Unit]
Description=fix to prevent the system from waking immediately after suspend, this is due to a bug with the power button.

[Service]
ExecStart=/bin/sh -c '/bin/echo PWRB > /proc/acpi/wakeup'
Type=oneshot
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

## Starting the service

* Now enable our service using : `# systemctl enable ./suspendfix_pwrb.service`

This finally resolves our issue. After some research, I really can't find why the PWR button sends a wake-up signal immediately after suspend.

# Conclusion

I hope this solves your issue with suspend on your HP Spectre 13. Feel free to contact me if it did not.
