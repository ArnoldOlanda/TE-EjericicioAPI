const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.set("PORT", process.env.PORT || 4000);
app.use(cors());

app.get("/dni/:dni", async (req, res) => {
    const { dni } = req.params;
    try {
        const resp = await axios.get(
            `https://api.apis.net.pe/v1/dni?numero=${dni}`,
            {
                Headers: {
                    Authentication:
                        "apis-token-4018.QRtFoX3nmD-tGRscLEkrvsJkkMxb25fo",
                },
            }
        );
        res.json({
            ok: true,
            data: resp.data,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500).json({
            ok: false,
            error: error.response.data,
        });
    }
});

app.get("/ruc/:ruc", async (req, res) => {
    const { ruc } = req.params;
    try {
        const resp = await axios.get(
            `https://api.apis.net.pe/v1/ruc?numero=${ruc}`,
            {
                Headers: {
                    Authentication:
                        "apis-token-4018.QRtFoX3nmD-tGRscLEkrvsJkkMxb25fo",
                },
            }
        );
        res.json({
            ok: true,
            data: resp.data,
        });
    } catch (error) {
        console.log(error.data);
        res.status(500).json({
            ok: false,
            error: error.response.data,
        });
    }
});

app.listen(app.get("PORT"), () => {
    console.log(`Server on port ${app.get("PORT")}`);
});
