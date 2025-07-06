# Proje Yönetim Yazılımı

## Genel Bakış
Bu Proje Yönetim Yazılımı, kullanıcıların projeler oluşturmasını, çalışan ve görev yönetimi yapmasını sağlayan web tabanlı bir uygulamadır. Yazılım, projelerin etkin bir şekilde yönetilmesine ve zamanında teslim edilmesine olanak tanır. Görev durumları takip edilir ve gecikme durumları dinamik olarak güncellenir.

---

## Kullanılan Teknolojiler

- *Front-End*: HTML, CSS, JavaScript, React, Bootstrap, Material UI
- *Back-End*: Node.js, Express.js
- *Veritabanı*: MySQL (PhpMyAdmin ile yönetim)
- *Ekstra Kütüphaneler*: Cors, Jsonwebtoken, Bcrypt.js, Cookie-parser, Multer

---

## Özellikler

### 1. Proje Yönetimi
- Yeni projeler oluşturma ve mevcut projeleri listeleme.
- Proje başlangıç ve bitiş tarihlerini girme.

### 2. Görev Yönetimi
- Görevlere başlangıç ve bitiş tarihi, adam/gün değeri ekleme.
- Görevlerin çalışanlara atanması.
- Görev durumlarını takip etme (Tamamlanacak, Devam Ediyor, Tamamlandı).
- Gecikme durumlarında proje bitiş tarihinin otomatik güncellenmesi.

### 3. Çalışan Yönetimi
- Çalışan ekleme, çıkarma ve güncelleme.
- Çalışan detay sayfasında geçmiş ve güncel görevlerini görüntüleme.
- Çalışanın zamanında tamamladığı ve geciktirdiği görevlerin istatistiklerini görselleştirme.

### 4. Kullanıcı Arayüzü
- Kullanıcı dostu ve modern bir arayüz.
- Projeler ve görevlerin kolayca yönetilebileceği bir kontrol paneli.

---

## Geliştirici Ekip

 <table>
    <tr>
      <th>İsim</th>
      <th>İletişim</th>
    </tr>
    <tr>
      <td>Revas Akın</td>
      <td>
        <a href="https://github.com/rewas72" target="_blank"><img src="images/logo/github.png" width="20" height="20"/></a>
        <a href="https://www.linkedin.com/in/revas-ak%C4%B1n-50187227a/" target="_blank" ><img src="images/logo/linkedin.png" width="20" height="20" /></a>
      </td>
     <td>Revas Akın</td>
      <td>
        <a href="https://github.com/rewas72" target="_blank"><img src="images/logo/github.png" width="20" height="20"/></a>
        <a href="https://www.linkedin.com/in/revas-ak%C4%B1n-50187227a/" target="_blank" ><img src="images/logo/linkedin.png" width="20" height="20" /></a>
      </td>
    </tr>
  
  </table>

---

## Uygulama Görselleri
<p align="center">
<img src="images/foto/1.jpeg" width="500" height="200">
<img src="images/foto/4.jpeg" width="500" height="200">
<img src="images/foto/3.jpeg" width="500" height="200">
<img src="images/foto/5.jpeg" width="500" height="200">
<img src="images/foto/6.jpeg" width="500" height="200">
<img src="images/foto/7.jpeg" width="500" height="200">
<img src="images/foto/8.jpeg" width="500" height="200">
<img src="images/foto/9.jpeg" width="500" height="200">
<img src="images/foto/10.jpeg" width="500" height="200">
<img src="images/foto/11.jpeg" width="500" height="200">
<img src="images/foto/12.jpeg" width="500" height="200">
 <img src="images/foto/13.jpeg" width="500" height="200">
<img src="images/foto/14.jpeg" width="500" height="200">
<img src="images/foto/15.jpeg" width="500" height="200">
</p>

---


## Kurulum ve Yükleme

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/ezgisasi/employee-management-v2.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd employee-management-v2
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Veritabanı Bağlantısını Yapılandırın:
- db.js dosyasını açın ve MySQL veritabanı bilgilerinizi ekleyin.

5. Uygulamayı çalıştırın: backend

   ```bash
   npm start
   ```
   5. Uygulamayı çalıştırın: frontend

   ```bash
   npm run dev
   ```
---

## Veritabanı Tasarımı

### Tablolar

#### Employees (Çalışanlar)
| Alan Adı      | Tür         | Açıklama                 |
|---------------|-------------|--------------------------|
| employeeId    | PK, int     | Çalışan ID              |
| email         | nvarchar(100)| E-posta adresi          |
| password      | nvarchar(50) | Şifre (hashlenmiş)      |
| fullName      | nvarchar(100)| Ad Soyad                |
| position      | nvarchar(50) | Pozisyon                |

#### Projects (Projeler)
| Alan Adı      | Tür         | Açıklama                 |
|---------------|-------------|--------------------------|
| projectId     | PK, int     | Proje ID                |
| projectName   | nvarchar(100)| Proje Adı               |
| startDate     | datetime    | Başlangıç Tarihi         |
| endDate       | datetime    | Bitiş Tarihi            |
| taskData      |nvarchar(100)| Görev Verisi            |

#### Tasks (Görevler)
| Alan Adı      | Tür         | Açıklama                 |
|---------------|-------------|--------------------------|
| taskId        | PK, int     | Görev ID                |
| taskName      | nvarchar(100)| Görev Adı               |
| startDate     | datetime    | Başlangıç Tarihi         |
| endDate       | datetime    | Bitiş Tarihi            |
| manDay        | int         | Adam/gün Değeri         |
| status        | nvarchar(20)| Durum (Tamamlanacak/Devam Ediyor/Tamamlandı) |
| delay         | int         |  Gecikmeler              |

---
