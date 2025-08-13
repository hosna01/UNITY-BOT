module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি অ্যাড করতে পারছি না 🫥 \n ${name} এর মেসেঞ্জার প্রাইভেট করা 🤧 \n\n ── ··♡   ∩_∩   ♡··──── \n ♡ ∩ SHIFAT ∩ ♡ `, event.threadID)
   } else api.sendMessage(`শোন, ${name} এই গ্রুপ থেকে যাইতে পারবি না! \n এখান থেকে যাইতে হইলে ♡ ∩ SHIFAT ∩ ♡ এর ক্লিয়ারেন্স লাগে! \nতুই বসের পারমিশন ছাড়া লিভ নিছোস – এই জন্য আবার অ্যাড দিলাম। \n\n ──+ ··♡   ∩_∩   ♡··+─── \n n ♡ ∩ SHIFAT ∩ ♡ `, event.threadID);
  })
 }
}
