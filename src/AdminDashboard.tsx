import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Save, Image as ImageIcon, LogOut, ChevronDown, ChevronUp } from "lucide-react";
import { MenuCategory, MenuItem } from "./data";

export default function AdminDashboard() {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [settings, setSettings] = useState({ musicUrl: "" });
  const [saving, setSaving] = useState(false);

  // For UI expansion state
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('/api/menu')
      .then(r => {
        if (!r.ok) throw new Error("API not available");
        return r.json();
      })
      .then(data => setMenu(data))
      .catch(e => {
        console.error("Local fallback for menu");
        const localMenu = localStorage.getItem("menuData");
        if (localMenu) {
          setMenu(JSON.parse(localMenu));
        } else {
          // Import local data if localStorage is empty
          import('./data').then(mod => setMenu(mod.menuData)).catch(err => console.error(err));
        }
      });

    fetch('/api/settings')
      .then(r => {
        if (!r.ok) throw new Error("API not available");
        return r.json();
      })
      .then(data => {
        if(data.musicUrl) setSettings(data);
      })
      .catch(e => {
        console.error("Local fallback for settings");
        const localSettings = localStorage.getItem("settingsData");
        if (localSettings) {
          setSettings(JSON.parse(localSettings));
        }
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Try to save to server first
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
      });

      await fetch("/api/menu", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menu)
      });
      
      localStorage.setItem("menuData", JSON.stringify(menu));
      localStorage.setItem("settingsData", JSON.stringify(settings));
      alert("تم الحفظ بنجاح! تم حفظ البيانات محلياً أيضاً.");
    } catch (e) {
      // Fallback to local storage
      localStorage.setItem("menuData", JSON.stringify(menu));
      localStorage.setItem("settingsData", JSON.stringify(settings));
      alert("تم الحفظ في المتصفح فقط (بدون خادم).");
    }
    setSaving(false);
  };

  const addCategory = () => {
    const newCat: MenuCategory = {
      id: "cat-" + Date.now(),
      title: "صنف جديد",
      image: "",
      items: []
    };
    setMenu([...menu, newCat]);
    setExpandedCats({ ...expandedCats, [newCat.id]: true });
  };

  const deleteCategory = (catId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الصنف؟")) return;
    setMenu(menu.filter(c => c.id !== catId));
  };

  const updateCategory = (catId: string, updates: Partial<MenuCategory>) => {
    setMenu(menu.map(c => c.id === catId ? { ...c, ...updates } : c));
  };

  const addItemToCategory = (catId: string) => {
    const newItem: MenuItem = {
      id: "item-" + Date.now(),
      name: "عنصر جديد",
      price: 0,
      description: "",
      image: ""
    };
    setMenu(menu.map(c => {
      if (c.id === catId) {
        return { ...c, items: [...c.items, newItem] };
      }
      return c;
    }));
  };

  const deleteItem = (catId: string, itemId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    setMenu(menu.map(c => {
      if (c.id === catId) {
        return { ...c, items: c.items.filter(i => i.id !== itemId) };
      }
      return c;
    }));
  };

  const updateItem = (catId: string, itemId: string, updates: Partial<MenuItem>) => {
    setMenu(menu.map(c => {
      if (c.id === catId) {
        return {
          ...c,
          items: c.items.map(i => i.id === itemId ? { ...i, ...updates } : i)
        };
      }
      return c;
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, onUrl: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        onUrl(data.url);
      } else {
        alert("Upload error");
      }
    } catch (err) {
      // Note: we can't really fallback local file upload easily on static sites
      // We could use base64 readers but it takes up lot of space in localStorage.
      alert("Upload feature might not work on static sites without a backend.");
    }
  };

  const toggleCat = (id: string) => {
    setExpandedCats({ ...expandedCats, [id]: !expandedCats[id] });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#5E2D14] font-['Cairo'] pb-24 text-right" dir="rtl">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-[#EFE6DD] px-4 py-4 flex justify-between items-center top-bar">
        <div className="w-16"></div>
        <h1 className="text-xl sm:text-2xl font-bold">لوحة التحكم السريعة</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#D4AF37] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#AA8B2C] transition-colors"
        >
          <Save size={18} />
          {saving ? "حفظ..." : "حفظ التعديلات"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-6">
        <div className="mb-6 bg-white border border-[#EFE6DD] shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">إعدادات النظام</h2>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">موسيقى الخلفية (رابط مفضل أو رفع ملف):</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={settings.musicUrl}
                onChange={(e) => setSettings({ ...settings, musicUrl: e.target.value })}
                placeholder="https://..."
                className="p-2 border rounded-lg flex-1 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                dir="ltr"
              />
              <label className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors flex items-center gap-2">
                <span className="text-sm font-bold truncate hidden sm:block">ارفع ملف صوتي</span>
                <input
                  type="file"
                  className="hidden"
                  accept="audio/*"
                  onChange={(e) => handleFileUpload(e, (url) => setSettings({ ...settings, musicUrl: url }))}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <button
            onClick={addCategory}
            className="flex items-center gap-2 bg-[#5E2D14] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#8B4B27]"
          >
            <Plus size={18} />
            إضافة صنف جديد (رئيسي)
          </button>
        </div>

        <div className="space-y-6">
          {menu.map((cat, catIdx) => (
            <div key={cat.id} className="bg-white border border-[#EFE6DD] shadow-md rounded-2xl overflow-hidden p-1">
              <div
                className="bg-[#faf3e3] p-4 flex flex-col sm:flex-row justify-between items-center sm:items-start cursor-pointer rounded-xl gap-4"
                onClick={(e) => {
                  // Prevent toggle if clicking on inputs or buttons
                  if ((e.target as HTMLElement).tagName !== "INPUT" && (e.target as HTMLElement).tagName !== "BUTTON" && !(e.target as HTMLElement).closest("button")) {
                    toggleCat(cat.id);
                  }
                }}
              >
                <div className="flex-1 flex flex-col gap-3 w-full">
                  <input
                    type="text"
                    value={cat.title}
                    onChange={(e) => updateCategory(cat.id, { title: e.target.value })}
                    placeholder="اسم الصنف (مثال: جيلاتو)"
                    className="text-xl font-bold p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold w-16">صورة الغلاف:</span>
                    <input
                      type="text"
                      value={cat.image}
                      onChange={(e) => updateCategory(cat.id, { image: e.target.value })}
                      placeholder="رابط الصورة (URL)"
                      className="p-2 border rounded-lg flex-1 text-left"
                      dir="ltr"
                    />
                    <label className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors">
                      <ImageIcon size={20} />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, (url) => updateCategory(cat.id, { image: url }))}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500 font-bold whitespace-nowrap">
                    ({cat.items.length} منتجات)
                  </div>
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="bg-red-50 text-red-500 p-2 rounded-lg hover:bg-red-100"
                    title="حذف الصنف برمته"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button className="text-gray-500 p-2" onClick={() => toggleCat(cat.id)}>
                    {expandedCats[cat.id] ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
              </div>

              {expandedCats[cat.id] && (
                <div className="p-4 bg-white/50 border-t border-[#EFE6DD]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.items.map((item, itemIdx) => (
                      <div key={item.id} className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white relative group">
                        <button
                          onClick={() => deleteItem(cat.id, item.id)}
                          className="absolute top-2 left-2 text-red-400 hover:text-red-600 bg-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          title="حذف المنتج"
                        >
                          <Trash2 size={16} />
                        </button>

                        <div className="flex gap-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center relative border group-hover:border-[#D4AF37]/50">
                            {item.image ? (
                              <img src={item.image} className="w-full h-full object-cover" />
                            ) : (
                              <ImageIcon className="text-gray-300" />
                            )}
                            {/* Upload overlay */}
                            <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                              <span className="text-white text-xs font-bold px-2 py-1 text-center">تغيير الصورة</span>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, (url) => updateItem(cat.id, item.id, { image: url }))}
                              />
                            </label>
                          </div>

                          <div className="flex-1 flex flex-col gap-2">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateItem(cat.id, item.id, { name: e.target.value })}
                              placeholder="اسم المنتج (مثال: موهيتو)"
                              className="font-bold p-1.5 border-b focus:border-[#D4AF37] outline-none text-sm"
                            />
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                value={item.price || ""}
                                onChange={(e) => updateItem(cat.id, item.id, { price: Number(e.target.value) })}
                                placeholder="السعر"
                                className="font-bold text-[#D4AF37] p-1.5 w-20 border rounded text-sm text-center outline-none"
                              />
                              <span className="text-sm font-bold text-gray-400 -mr-1">₪</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                           <textarea
                              value={item.description || ""}
                              onChange={(e) => updateItem(cat.id, item.id, { description: e.target.value })}
                              placeholder="وصف المنتج..."
                              className="w-full border rounded-lg p-2 text-sm text-gray-600 outline-none h-16 resize-none focus:ring-1 focus:ring-[#D4AF37]"
                           />
                        </div>
                        
                        <div className="mt-2 flex items-center gap-2">
                           <input
                             type="text"
                             value={item.image || ""}
                             onChange={(e) => updateItem(cat.id, item.id, { image: e.target.value })}
                             placeholder="رابط الصورة الخارجي (اختياري)"
                             className="text-xs text-left p-1 border rounded w-full"
                             dir="ltr"
                           />
                           <label className="flex items-center gap-1 cursor-pointer">
                             <input 
                               type="checkbox" 
                               checked={item.isPopular || false} 
                               onChange={(e) => updateItem(cat.id, item.id, { isPopular: e.target.checked })}
                               className="accent-[#D4AF37]"
                             />
                             <span className="text-xs font-bold text-orange-500 whitespace-nowrap">مميز</span>
                           </label>
                        </div>

                      </div>
                    ))}
                    
                    {/* Add Item Button */}
                    <button
                      onClick={() => addItemToCategory(cat.id)}
                      className="border-2 border-dashed border-[#D4AF37]/40 rounded-xl p-4 flex flex-col items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-colors min-h-[160px]"
                    >
                      <Plus size={32} className="mb-2" />
                      <span className="font-bold">إضافة منتج جديد</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
