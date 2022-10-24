const router = require("express").Router();
const User = require("../models/User");

// CRUD (Creat, Read, Uodate, Delete)
// ユーザー情報の更新
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("ユーザー情報が更新されました");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res
        .status(403)
        .json("あなたは自分のアカウントの時だけ更新できます");
    }
});

// ユーザー情報の削除
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("ユーザー情報が削除されました");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res
        .status(403)
        .json("あなたは自分のアカウントの時だけ削除できます");
    }
});



// ユーザー情報の取得
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        return res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// ユーザーのフォロー
router.put("/:id/follow", async (req, res)=> {
    if (req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.params.id);
            // フォロワーに自分がいなかったらフォローできる
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $push: {
                        followers: req.body.userId,
                    },
                });
                // 自分のフォロワー数を操作する
                await currentUser.updateOne({
                    $push : {
                        followings:req.params.id,
                    },
                });
                return res.status(200).json("フォローしました");
            } else {
                return res
                .status(403)
                .json("あなたはすでにこのユーザーをフォローしています");

            }
        }catch (err){
            return res.status(500).json(err);
        }
    } else {
        return res.status(500).json("自分自身をフォローできません");
    }
});


// ユーザーのアンフォロー
router.put("/:id/unfollow", async (req, res)=> {
    if (req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.params.id);
            // フォロワーに存在したらフォローが外せる
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $pull: {
                        followers: req.body.userId,
                    },
                });
                // 自分のフォロワー数を操作する
                await currentUser.updateOne({
                    $pull : {
                        followings:req.params.id,
                    },
                });
                return res.status(200).json("フォロー解除しました");
            } else {
                return res
                .status(403)
                .json("このユーザーはフォロー解除できません");

            }
        }catch (err){
            return res.status(500).json(err);
        }
    } else {
        return res.status(500).json("自分自身をフォロー解除できません");
    }
});



module.exports = router;