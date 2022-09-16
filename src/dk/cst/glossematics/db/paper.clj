(ns dk.cst.glossematics.db.paper)

;; TODO: load from xslx or csv file
(def static-data
  [{:db/ident "Utilg636_0000_001_Diderichsen-EJF_0010-tei.xml" :document/condition "carbon copy"}
   {:db/ident "Utilg636_0000_001_Diderichsen-EJF_0020-tei.xml" :document/condition "original"}
   {:db/ident "Utilg636_0000_001_Diderichsen-EJF_0030-tei.xml" :document/condition "original"}
   {:db/ident "Utilg636_0000_001_Diderichsen-EJF_0040-tei.xml" :document/condition "original"}
   {:db/ident "Utilg636_0000_001_Diderichsen-EJF_0050-tei.xml" :document/condition "original"}
   {:db/ident "Utilg636_0000_004_Diderichsen-Bech_0060-tei.xml" :document/condition "carbon copy"}
   {:db/ident "Utilg636_0000_004_Diderichsen-Bech_0070-tei.xml" :document/condition "carbon copy"}
   {:db/ident "Utilg636_0000_004_Diderichsen-Bech_0080-tei.xml" :document/condition "carbon copy"}
   {:db/ident "Utilg636_0000_004_Diderichsen-Bech_0090-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0020-tei.xml" :document/condition "photocopy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0030-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0040-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0050-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0060-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0080-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0100-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0120-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0130-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0140-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0150-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0160-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0170-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0200-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0230-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0240-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0250-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0260-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0270-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0280-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0290-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0300-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0310-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0320-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0330-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0340-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0350-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0360-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0380-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0400-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0410-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0420-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0450-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0460-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0480-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0500-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0510-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0520-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0530-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0540-tei.xml" :document/condition "carbon copy"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0550-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0560-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0570-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0580-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0590-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0600-tei.xml" :document/condition "original"}
   {:db/ident "acc-2005_0099_033_EFJ-DIDERICHSEN4_0620-tei.xml" :document/condition "original"}])
